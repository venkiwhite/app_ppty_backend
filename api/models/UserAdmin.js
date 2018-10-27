/**
 * UserAdmin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {

    username: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
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
    },
    isDeleted: {
      type: "boolean",
      defaultsTo: false
    }

  },

  validatePassword: (password) => {
    return _.isString(password) && password.length >= 5 && password.match(/[a-z]/i) && password.match(/[0-9]/) && password.match(/[A-Z]/i) && password.match(/[!@#$%^&*(),.?":{}|<>]/);
  }

};

