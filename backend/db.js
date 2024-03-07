const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sid:***@cluster0.i1unc7g.mongodb.net/Todo")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type:Boolean,
        default:false
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
