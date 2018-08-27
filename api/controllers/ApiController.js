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
  getVisits: async function (req, res) {
    let visitFromDatabase= await Visit.find({user:req.user.id}).populate('doctor').populate('visitstatus');
    let visitsArr=[];
    await Promise.all(visitFromDatabase.map(async (visit) => {
      let doctor=await User.findOne({doctor:visit.doctor.id});

      let vis={
        id: visit.id,
        status:visit.status.name,
        isRead:visit.isRead,
        doctor:`dr ${doctor.firstName} ${doctor.lastName}`,
        place:visit.doctor.placeAddress,
        date:visit.date,
        comment:visit.comment
      };
      visitsArr.push(vis)

    }));

    return res.send(visitsArr)
  }

};

