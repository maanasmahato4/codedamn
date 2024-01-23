const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("task", TodoSchema);

module.exports = Todo;
