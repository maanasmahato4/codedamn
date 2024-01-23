const express = require("express");
const { SignUp, SignIn, SignOut } = require("./auth.controller");
const verifyJWT = require("../middlewares/verifyJwt.middleware");

const router = express.Router();

router
  .post("/auth/signup", SignUp)
  .post("/auth/signin", SignIn)
  .post("/auth/signout/:id", verifyJWT, SignOut)

module.exports = router;
