/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
const generator = require('generate-password');

/**
 * Triggers when user authenticates via passport
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Object} error Error object
 * @param {Object} user User profile
 * @param {Object} info Info if some error occurs
 * @private
 */
async function _onPassportAuth(req, res, error, user, info) {
  if (error) return res.serverError(error);
  if (!user) return res.unauthorized(null, info && info.code, info && info.message);

  let userFromDatabase = await User.findOne({email: req.param('email')});

  if (userFromDatabase != null) {

    let userFiltered = {
      id: userFromDatabase.id,
      email: userFromDatabase.email,
      firstName: userFromDatabase.firstName,
      lastName: userFromDatabase.lastName,
      role: userFromDatabase.role,
      token: "JWT " + CipherService.createToken(user)
    };

    return res.send(userFiltered)
  } else {
    return res.accountNotFound()
  }
}

module.exports = {
  /**
   * Sign up in system
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  register: async function (req, res) {
    let firstName = req.param('firstName');
    let lastName = req.param('lastName');
    let password = req.param('password');
    let email = req.param('email');
    let role= req.param('role');
    let pwz;
    if (role===2){pwz=req.param('pwz')}
    else pwz=null;

    if (firstName != null && lastName != null && password != null && email != null) {

      try {
        await User
          .create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
            pwz: pwz
          })
          .fetch();
        return res.created()
      } catch(e){
        switch (e.code) {
          case 'E_UNIQUE':
            return res.accountExists();

          default:
            return res.serverError(err)
        }
      }

    } else {
      return res.badRequest()
    }
  },


  /**
   * Sign in by local strategy in passport
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  login: async function (req, res) {

    let email = req.param('email');
    let password = req.param('password');

    if (email != null && password != null) {

      let user = await User.findOne({
        email: email
      });

      if (!user) return res.accountNotFound();

      if (user.isActive) {
        passport.authenticate('local',
          _onPassportAuth.bind(this, req, res))(req, res);
      } else {
        return res.accountNotActivated()
      }

    } else {
      return res.badRequest()
    }
  },


  getTemporaryPassword: async function (req, res) {

    let email = req.param('email');

    if (email != null) {

      let user = await User.findOne({email: req.param('email')});
      if (!user) return res.accountNotFound();

      if (user.isActive) {

        let expirationDate = new Date().getTime() + 86400000;
        let temporaryPassword = generator.generate({
          length: 8,
          numbers: true,
          symbols: true,
          uppercase: true,
          strict: true
        });

        await User.update({email: req.param('email')})
          .set({
            temporaryPassword: temporaryPassword,
            temporaryPasswordExpirationTimestamp: new Date(expirationDate)
          });

        try {
          let emails=[email];
          await sails.helpers.sendEmail.with({
            to: emails,
            subject: 'Password Reset',
            text: 'Your temporary password is: ' + temporaryPassword
          });
        } catch (e) {
          console.log(e.message)
        }

        res.ok()

      } else {
        return res.accountNotActivated()
      }
    } else {
      return res.badRequest()
    }
  },


  resetPassword: async function (req, res) {

    let temporaryPassword = req.param('temporaryPassword');
    let newPassword = req.param('newPassword');
    let email = req.param('email');

    if (temporaryPassword != null && email != null && newPassword != null) {

      let user = await User.findOne({email: req.param('email')});
      if (!user) return res.accountNotFound();

      if (user.isActive) {

        if (user.temporaryPassword !== temporaryPassword) {
          return res.temporaryPasswordIncorrect()
        }

        if (Date.now() > user.temporaryPasswordExpirationTimestamp) {
          return res.temporaryPasswordExpired()
        } else {

          await User.update({email: req.param('email')}).set({
            password: newPassword
          });
          return res.ok()
        }
      } else {
        return res.accountNotActivated()
      }
    } else {
      return res.badRequest()
    }
  },


  /**
   * Sign in by local strategy in passport
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signinPanel: async function (req, res) {

    let email = req.param('email');
    let password = req.param('password');

    if (email != null && password != null) {

      let user = await User.findOne({
        email: email
      });

      if (!user) return res.accountNotFound();

      if (user.role!==1) return res.unauthorized();

      if (user.isActive) {
        passport.authenticate('local',
          _onPassportAuth.bind(this, req, res))(req, res);
      } else {
        return res.accountNotActivated()
      }

    } else {
      return res.badRequest()
    }
  },


};


