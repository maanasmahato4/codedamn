const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = 'secret';

const verifyJWT = async (req, res, next) => {
  const authorization = req.headers.authorization || req.headers.Authorization;
  const access_token = authorization.split(" ")[1];
  jwt.verify(access_token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decoded;
    req.role = decoded.role;
  });
  next();
};

module.exports = verifyJWT;
