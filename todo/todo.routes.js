const express = require("express");
const { GetTodos, AddTodo } = require("./todo.controller");
const verifyJwt = require('../middlewares/verifyJWT.middleware');
const verifyRole = require("../middlewares/verifyRole.middleware")

const router = express.Router();

router
  .get("/todo/todos", GetTodos)
  .post("/todo/new", verifyJwt, verifyRole(['admin']), AddTodo);

module.exports = router;
