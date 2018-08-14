module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_COMPANY_EXISTS',
    message: message
    || 'Company already exists',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (409 E_COMPANY_EXISTS)\n', response);

  this.res.status(409);
  this.res.json(response);
};
