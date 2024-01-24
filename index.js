const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  return res.sendStatus(200);
})

app.listen(3000, () => {
  console.log("server running at port: 3000");
});
