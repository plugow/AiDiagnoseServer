/**
 * Visit.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    doctor:{
      model:'doctor'
    },
    patient:{
      model:'user'
    },
    place:{
      type:'string'
    },
    date:{
      type: 'ref',
      columnType: 'datetime'
    },
    comment:{
      type:'string'
    },
    isRead:{
      type:'boolean',
      defaultsTo:false
    },
    status:{
      model:'visitstatus'
    }

  },

};

