/**
 * isAuthenticated
 * @description :: Policy to inject user in req via JSON Web Token
 */
var passport = require('passport');

module.exports = function (req, res, next) {

  passport.authenticate('jwt', function (error, user, info) {
    if (error) return res.serverError(error);
    if (!user){
        if(info && info.name === 'TokenExpiredError') return res.unauthorized(null, 'E_TOKEN_EXPIRED', info && info.message);
        return res.unauthorized(null, info && info.code, info && info.message);
    }

    User.findOne({email: user.email}).exec(function (error, user) {

      if(!user) return res.unauthorized(null, info && info.code, info && info.message);

      if (!user.isActive) {
        return res.accountNotActivated()
      } else {
        req.user = user;
        return next();
      }
    });

  })(req, res);
};
