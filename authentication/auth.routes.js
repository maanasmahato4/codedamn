const express = require("express");
const { SignUp, SignIn, SignOut } = require("./auth.controller");

const router = express.Router();

router
  .post("/auth/signup", SignUp)
  .post("/auth/signin", SignIn)
  .post("/auth/signout/:id", SignOut);

module.exports = router;
