module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || 'E_EMAIL_SENDING_ERROR',
    message: message
    || 'Email sending error',
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (500 E_EMAIL_SENDING_ERROR)\n', response);

  this.res.status(500);
  this.res.json(response);
};
