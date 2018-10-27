/**
 * Amenities.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'string'
    },
    createdBy: {
      type: 'string'
    },
    updatedBy: {
      type: 'string'
    },
    isDeleted: {
        type : "boolean",
        defaultsTo : false
    }

  },

};

