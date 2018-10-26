/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true,
      custom: function(value) {
        // • password should be string with minimum of 5 letters
        // • contain at least one number, one lowercase, one uppercase
        // • contain at least one special character in these !@#$%^&*(),.?":{}|<>
        return _.isString(value) && value.length >= 5 && value.match(/[a-z]/i) && value.match(/[0-9]/) && value.match(/[A-Z]/i) && value.match(/[!@#$%^&*(),.?":{}|<>]/i);
      }
    },
    firstname: {
      type: 'string',
      required: true,
    },
    lastname: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true
    },
    mobileNumber: {
      type: 'string',
      required: true,
    }

  },

};

