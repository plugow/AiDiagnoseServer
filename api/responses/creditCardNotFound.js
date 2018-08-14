module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_CREDIT_CARD_NOT_FOUND',
    message: message
    || 'Credit card not found',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (422 E_CREDIT_CARD_NOT_FOUND)\n', response);

  this.res.status(422);
  this.res.json(response);
};
