/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true,
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    lastName: {
      type: 'string',
      required: true,
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    password: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true,
      columnType: 'varchar(100) CHARACTER SET utf8mb4'
    },
    role: {
      model: 'role',
      required: true
    },
    doctor: {
      model: 'doctor',
      unique:true
    },
    isActive: {
      type: 'boolean',
      defaultsTo: false
    },
    visits:{
      collection:'visit',
      via:'patient'
    },
    temporaryPassword: {
      type: 'string'
    },
    temporaryPasswordExpirationTimestamp: {
      type: 'ref',
      columnType: 'datetime'
    },
  },
  beforeUpdate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  },
  beforeCreate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  },
};


