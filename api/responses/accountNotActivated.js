module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_ACCOUNT_NOT_ACTIVATED',
    message: message
    || 'Account not yet activated',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (406 E_ACCOUNT_NOT_ACTIVATED)\n', response);

  this.res.status(406);
  this.res.json(response);
};
