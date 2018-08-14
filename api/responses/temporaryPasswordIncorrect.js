module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_TEMPORARY_PASSWORD_INCORRECT',
    message: message
    || 'Temporary password is incorrect',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (401 E_TEMPORARY_PASSWORD_INCORRECT)\n', response);

  this.res.status(409);
  this.res.json(response);
};
