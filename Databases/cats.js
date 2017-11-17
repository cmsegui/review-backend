var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "Tabby",
    age: 5, 
    temperament: "Evil"
});

george.save(function(err, cat) {
    if(err) {
        console.log("Something went wrong!");
    } else {
        console.log("A cat was saved to the database!");
        console.log(cat);
    }
});