const express = require("express");
const { databaseConnection } = require("./database/db");

const app = express();

app.use(express.json());

app.listen(4000, () => {
  console.log("server running at port: 3000");
  databaseConnection();
});
