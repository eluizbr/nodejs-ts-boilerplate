process.env.NODE_ENV === 'production'
  ? (module.exports = require('./config-prod'))
  : (module.exports = require('./config-dev'));
