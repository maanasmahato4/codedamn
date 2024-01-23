const User = require("../models/user.schema");
const { hashPassword, passwordMatch } = require("../helpers/bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../helpers/jwt");

const SignUp = async (req, res) => {
  try {
    const user = req.body;
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
    const savedUser = await User.create(user);
    const tokenPayload = {
      username: savedUser.username,
      role: savedUser.role,
    };
    const access_token = generateAccessToken(tokenPayload);
    const refresh_token = generateRefreshToken(tokenPayload);

    res.cookie("jwt", refresh_token, { httpOnly: true });
    return res.status(200).json(access_token);
  } catch (error) {
    return res.status(500).json({ error: "error occured during signup" });
  }
};

const SignIn = async (req, res) => {
  try {
    const user = req.body;
    const userExist = await User.findOne({ username: user.username });
    if (!userExist) {
      return res.status(404).json({ error: "user doesn't exist" });
    }
    if (!passwordMatch(user.password, userExist.password)) {
      return res.sendStatus(401);
    }
    const tokenPayload = {
      username: userExist.username,
      role: userExist.role,
    };
    const access_token = generateAccessToken(tokenPayload);
    const refresh_token = generateRefreshToken(tokenPayload);

    res.cookie("jwt", refresh_token, { httpOnly: true });
    return res.status(200).json(access_token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error occured during signin" });
  }
};

const SignOut = (req, res) => {
  try {
    res.clearCookie("jwt", { httpOnly: true });
    return res.status(200).json({ message: "user logged out" });
  } catch (error) {
    return res.status(500).json({ error: "error occured during signout" });
  }
};

module.exports = { SignUp, SignIn, SignOut };
