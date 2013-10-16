/**
 * Culture module loader
 *
 * applies module files/directories in ./culture to exports. It assumes that
 * everything in ./culture, whether file or dir, is a module to be applied
 * to exports.
 *
 * @module culture
 */

var S = require('string'),
    Culture;

/** @const MODULES */
const MODULES = Object.freeze([
  'Errors',
  'SharedCache',
  'Broker',
  'Persist'
]);

/**
 * Discovers modules in lib/culture and applies getters
 * to this object on their behalf
 *
 * For example:
 * culture/broker.js -> `culture.broker`
 *
 * @constructor
 */
Culture = function () {

  MODULES.forEach(function (moduleName) {

    var modulePath = './culture/' + S(moduleName).dasherize().substr(1).s;

    Object.defineProperty(this, moduleName, {
      get: function () {
        return require(modulePath);
      }
    });

  }.bind(this));

};

module.exports = new Culture();
