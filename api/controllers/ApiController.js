/**
 * ApiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getDoctors: async function (req, res) {
    let doctorsFromDatabase = await Doctor.find({}).populate('user');

    if (doctorsFromDatabase != null) {
    var doctorsArr=[];
    doctorsFromDatabase.forEach(doctor =>{
      let doc={
        id: doctor.id,
        firstName: doctor.user[0].firstName,
        lastName: doctor.user[0].lastName,
        latitude:doctor.latitude,
        longitude:doctor.longitude
      };
      doctorsArr.push(doc)
    });

      return res.send(doctorsArr)
    } else {
      return res.accountNotFound()
    }
  },

};

