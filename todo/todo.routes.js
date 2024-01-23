const express = require("express");
const { GetTodos, AddTodo } = require("./todo.controller");
const verifyJwt = require("../middlewares/verifyJwt.middleware");

const router = express.Router();

router
  .get("/todo/todos", GetTodos)
  .post("/todo/new", verifyJwt, AddTodo);

module.exports = router;
