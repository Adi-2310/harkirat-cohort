const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://adi2310:sH6mOsPUc9VA3H0R@cluster0.aiart.mongodb.net/");

const todoSchema = mongoose.Schema({
    name: String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}

