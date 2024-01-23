const express = require("express");
const { GetTodos, AddTodo } = require("./todo.controller");
const verifyJWT = require("../middlewares/verifyJWT.middleware");
const verifyRole = require("../middlewares/verifyRole.middleware");

const router = express.Router();

router
  .get("/todo/todos", GetTodos)
  .post("/todo/new", verifyJWT, verifyRole(["admin"]), AddTodo);

module.exports = router;
