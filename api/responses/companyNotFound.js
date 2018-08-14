module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_COMPANY_NOT_FOUND',
    message: message
    || 'Company not found',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (42 E_COMPANY_NOT_FOUND)\n', response);

  this.res.status(422);
  this.res.json(response);
};
