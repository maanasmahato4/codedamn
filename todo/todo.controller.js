const Todo = require("../models/todo.schema");

const GetTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const AddTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { GetTodos, AddTodo };
