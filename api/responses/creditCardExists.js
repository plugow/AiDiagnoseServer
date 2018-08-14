module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_CREDIT_CARD_EXISTS',
    message: message
    || 'Credit Card already exists',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (409 E_CREDIT_CARD_EXISTS)\n', response);

  this.res.status(409);
  this.res.json(response);
};
