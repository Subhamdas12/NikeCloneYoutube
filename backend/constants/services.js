const passport = require("passport");
exports.sanitizeUser = (user) => {
  return { id: user._id, role: user.role };
};
exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};

exports.isAuth = () => {
  return passport.authenticate("jwt");
};
