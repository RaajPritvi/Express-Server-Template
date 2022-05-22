const express = require('express');
const app = express();

app.get("/", function(req, res) {
    ///console.log(req);
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res) {
    res.send("<h1>Contact me at: raajpritvi26@gmail.com</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>My name is Raaj Pritvi</h1>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
