module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_TEMPORARY_PASSWORD_EXPIRED',
    message: message
    || 'Temporary password expired',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (401 E_TEMPORARY_PASSWORD_EXPIRED)\n', response);

  this.res.status(409);
  this.res.json(response);
};
