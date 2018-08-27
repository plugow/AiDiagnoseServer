/**
 * Doctor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user:{
      collection:'user',
      via:'doctor'
    },
    specialization: {
      collection: 'specialization',
      via: 'doctor'
    },
    pwz: {
      type: 'string',
      required: false,
    },
    longitude: {
      type: 'number'
    },
    latitude:{
      type: 'number'
    },
    placeId:{
      type:'string'
    }
  },
};

