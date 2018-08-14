/**
 * 403 Forbidden.
 * Specifically for authentication failed or not yet provided.
 */
module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_FORBIDDEN',
    message: message || 'FORBIDDEN',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent ('+ code +')\n', response);

  this.res.status(403);
  this.res.json(response);
};
