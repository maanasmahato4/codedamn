const mongoose = require("mongoose");

const databaseConnection = () =>
  mongoose
    .connect(
      "mongodb+srv://username:password@cluster0.fon9sup.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database running");
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = { databaseConnection };
