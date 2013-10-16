/**
 * Interface to a culture shared cache
 *
 * Used to store data regarding node location, etc.
 */

var errors = require('../errors'),
    SharedCache;

const ADAPTERS = Object.freeze(['memcached', 'redis']);

/**
 * @param {Object} config
 * @param {String} config.adapter
 * @param {String} config.address
 */
SharedCache = function (config) {

  if (ADAPTERS.indexOf(config.adapter) === -1) {
    throw new errors.InvalidCacheAdapter();
  }

  this.adapter = require('./adapters/' + config.adapter)
};

SharedCache.prototype.init = function () {
  
};
