const jwt = require("jsonwebtoken");

export const ACCESS_TOKEN_SECRET = "secret";
export const REFRESH_TOKEN_SECRET = "refresh_secret";

const generateAccessToken = (user) => {
  try {
    const token = jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const generateRefreshToken = (user) => {
  try {
    const token = jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { generateAccessToken, generateRefreshToken };
