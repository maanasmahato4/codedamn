const express = require("express");
const { GetTodos, AddTodo } = require("./todo.controller");

const router = express.Router();

router
  .get("/todo/todos", GetTodos)
  .post("/todo/new", AddTodo);

module.exports = router;
