/**
 * Symptom.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    description: {
      type: 'string',
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },

  },

};

