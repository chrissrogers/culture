/**
 * Defines and provides error classes specific to culture
 *
 * @module culture/errors
 */

var _      = require('lodash'),
    util   = require('util'),
    errors = module.exports,
    generateError;

const ERRORS = Object.freeze({
  InvalidCacheAdapter: '%s is not a valid cache adapter'
});

/**
 * Generates a new error type with full stacktrace
 *
 * @param {String} name The name of the error we are to create
 *
 * @return {Error} a fully-qualified Error descendant
 *
 * Generated errors have the following properties
 *
 * @param {Array} messageParams Params to be passed to the default message
 * @param {String} [stack] Optional stack pass-through
 *
 * @return {Error}
 */
generateError = function (name, message) {

  return function (messageParams, stack) {

    Error.call(this, {
      message:        util.format.apply(this, [message].concat(messageParams)),
      constructorOpt: errors[name]
    });

    this.name = name;

    if (stack) this.stack = stack;

  };

};

_(ERRORS).forEach(function (errorName, errorMessage) {

  errors[errorName] = generateError(errorName, errorMessage);
  util.inherits(errors[errorName], Error);

});
