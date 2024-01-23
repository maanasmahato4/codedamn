const verifyRole = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.role;
      const match = allowedRoles.includes(userRole);
      if (!match) {
        return res.sendStatus(401);
      }
      next();
    };
  };
  
  module.exports = verifyRole;
  