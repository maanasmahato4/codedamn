const express = require("express");
const { GetTodos, AddTodo } = require("./todo.controller");
const verifyJWT = require("../middlewares/verifyJwt.middlware");

const router = express.Router();

router
  .get("/todo/todos", GetTodos)
  .post("/todo/new", verifyJWT, AddTodo);

module.exports = router;
