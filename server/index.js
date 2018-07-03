var bc = require("./controllers/book_controller.js");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../build"));
app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:id", bc.update);
app.delete("/api/books/:id", bc.delete);

app.listen(3000, function() {
    console.log(`The server is run on 3000!`);
})