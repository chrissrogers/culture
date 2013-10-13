/**
 * Culture module loader
 *
 * applies module files/directories in ./culture to exports. It assumes that
 * everything in ./culture, whether file or dir, is a module to be applied
 * to exports.
 *
 * @module culture
 */

var Culture = module.exports;

/** @const CULTURE_MODULES */
const CULTURE_MODULES = [];

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

  CULTURE_MODULES.forEach(function (module) {

    Object.defineProperty(this, module, {
      get: function () {
        return require('culture/' + module);
      }
    });

  }.bind(this));

};
