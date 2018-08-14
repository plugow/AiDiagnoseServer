module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_ACCOUNT_NOT_FOUND',
    message: message
    || 'Account not found',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (401 E_ACCOUNT_NOT_FOUND)\n', response);

  this.res.status(401);
  this.res.json(response);
};
