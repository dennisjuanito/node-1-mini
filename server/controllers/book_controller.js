var books = [];
var id = 0;
module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    }
    ,
    create: (req, res) => {
        let {title, author} = req.body;
        let bookToAdd = {
            title: title,
            author: author,
            id    : id
        };
        books.push(bookToAdd);
        id++;
        res.status(200).send(books);
    }   
    ,
    update: (req, res) => {
        let { id } = req.params;
        id = Number(id);
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) { // possible error
                books[i] = req.body;
                books[i].id = i;
                console.log(books[i]);
                res.status(200).send(books);
            }
        }
    }
    ,
    delete: (req, res) => {
        
        let { id } = req.params;
        console.log(id);
        id = Number(id);
        console.log("Before" );
        console.log( books);
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i, 1);
                
            }
            
        }
        console.log( "After");
        console.log(books);
        res.status(200).send(books);
        
    }
};