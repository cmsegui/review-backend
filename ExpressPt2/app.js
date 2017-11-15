var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

var friends = ["Brittany", "Garrett", "Lonnie", "Sarah", "Jeff"]


app.get("/", function (req, res) {
    res.render("home");
})

app.get("/ilove/:music", function (req, res) {
    var music = req.params.music;
    res.render("music", {artist: music});
})

app.get("/posts", function (req, res) {
    var posts = [
        { title: "post 1", author: "Cyd" }, 
        { title: "post 2", author: "Lauren" }, 
        { title: "post 3", author: "Juli" }, 
        
    ];
    res.render("posts", { posts: posts });
})

app.get ("/friends", function (req, res) {
    res.render("friends", { friends: friends });
})

app.post("/addfriend", function (req, res) {
    var newFriend = (req.body.newfriend);
    friends.push(newFriend);
    res.redirect("/friends");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});