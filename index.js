const express = require("express");
const { databaseConnection } = require("./database/db");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server running at port: 3000");
  databaseConnection();
  app.use("/api/v1", require("./authentication/auth.routes"));
  app.use("/api/v1", require("./todo/todo.routes"));
});
