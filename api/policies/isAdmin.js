/**
 * isAdmin
 * @description :: Policy to check admin privileges
 */
var passport = require('passport');

module.exports = function (req, res, next) {

  User.findOne({email: req.user.email}).exec(function (error, user) {
    if (user.role !== 1) {
      return res.forbidden(null, "E_INSUFFICIENT_CREDENTIALS", "Insufficient Credentials");
    } else {
      return next();
    }
  });
};
