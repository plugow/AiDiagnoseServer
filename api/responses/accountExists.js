module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_ACCOUNT_EXISTS',
    message: message
    || 'Email already exists',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (409 E_ACCOUNT_EXISTS)\n', response);

  this.res.status(409);
  this.res.json(response);
};
