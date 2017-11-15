var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi There");
});

app.get("/dog", function(req, res) {
    res.send("Woof");
})

app.get("/bye", function(req, res) {
    res.send("Goodbye");
})

app.get("*", function(req, res) {
    res.send("You are on a page that does not exist.");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});