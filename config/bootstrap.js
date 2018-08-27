/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // if (await User.count() > 0) {
  //   return done();
  // }


  await Role.createEach([
    {
      name: 'ADMIN'
    },
    {
      name: 'DOCTOR'
    },
    {
      name: 'USER'
    }
  ]);

  await Specialization.createEach([
    {
      name: 'Dermatolog'
    },
    {
      name: 'Ginekolog'
    },
    {
      name: 'Internista'
    },
    {
      name: 'Kardiolog'
    },
    {
      name: 'Laryngolog'
    },
    {
      name: 'Neurolog'
    },
    {
      name: 'Okulista'
    },
    {
      name: 'Urolog'
    },
    {
      name: 'Wenerolog'
    }
  ]);


  await User.createEach([
    {
      email: 'plugow7@gmail.com',
      firstName: 'Admin',
      lastName: 'Admin',
      password: 'admin',
      isActive: true,
      role: 1,
    },
    {
      email: 'doctor@doctor.pl',
      firstName: 'Doctor',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor2@doctor.pl',
      firstName: 'Doctor2',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor3@doctor.pl',
      firstName: 'Doctor3',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor4@doctor.pl',
      firstName: 'Doctor4',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor5@doctor.pl',
      firstName: 'Doctor5',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor6@doctor.pl',
      firstName: 'Doctor6',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor7@doctor.pl',
      firstName: 'Doctor7',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor8@doctor.pl',
      firstName: 'Doctor8',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor9@doctor.pl',
      firstName: 'Doctor9',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor10@doctor.pl',
      firstName: 'Doctor10',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor11@doctor.pl',
      firstName: 'Doctor11',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor12@doctor.pl',
      firstName: 'Doctor12',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor13@doctor.pl',
      firstName: 'Doctor13',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor14@doctor.pl',
      firstName: 'Doctor14',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor15@doctor.pl',
      firstName: 'Doctor15',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor16@doctor.pl',
      firstName: 'Doctor16',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor17@doctor.pl',
      firstName: 'Doctor17',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'doctor18@doctor.pl',
      firstName: 'Doctor18',
      lastName: 'Doctor',
      password: 'doctor',
      isActive: true,
      role: 2,
    },
    {
      email: 'user@user.pl',
      firstName: 'User',
      lastName: 'User',
      password: 'User',
      isActive: true,
      role: 3,
    }

  ]);

  await Doctor.createEach([
    {
      user:2,
      specialization:1,
      longitude:50.065594,
      latitude: 19.961905,
    },
    {
      user:3,
      specialization:1,
      longitude:50.066351,
      latitude: 19.970994,
    },
    {
      user:4,
      specialization:2,
      longitude:50.073334,
      latitude: 19.966097,
    },
    {
      user:5,
      specialization:2,
      longitude:50.067349,
      latitude: 19.958375,
    },
    {
      user:6,
      specialization:3,
      longitude:50.064887,
      latitude: 19.945348,
    },
    {
      user:7,
      specialization:3,
      longitude:50.073890,
      latitude: 19.946923,
    },
    {
      user:8,
      specialization:4,
      longitude:50.078020,
      latitude: 19.961528,
    },
    {
      user:9,
      specialization:4,
      longitude:50.058831,
      latitude: 19.976475,
    },
    {
      user:10,
      specialization:5,
      longitude:50.056627,
      latitude: 19.976046,
    },
    {
      user:11,
      specialization:5,
      longitude:50.046320,
      latitude: 19.973300,
    },
    {
      user:12,
      specialization:6,
      longitude:50.061751,
      latitude: 19.943945,
    },
    {
      user:13,
      specialization:6,
      longitude:50.072660,
      latitude:  19.944203,
    },
    {
      user:14,
      specialization:7,
      longitude:50.084008,
      latitude: 19.971838,
    },
    {
      user:15,
      specialization:7,
      longitude:50.070287,
      latitude: 20.040679,
    },
    {
      user:16,
      specialization:8,
      longitude:50.073760,
      latitude: 20.039219,
    },
    {
      user:17,
      specialization:8,
      longitude:50.063842,
      latitude: 20.053297,
    },
    {
      user:18,
      specialization:9,
      longitude:50.073430,
      latitude: 19.999908,
    },
    {
      user:19,
      specialization:9,
      longitude:50.063842,
      latitude: 20.053297,
    },

  ]);

  await Symptom.createEach([
    { name: 'trądzik' },
    { name: 'przesuszona skóra' },
    { name: 'pękające naczyńka' },
    { name: 'zmiany na skórze' },
    { name: 'zmiany na znamieniu' },
    { name: 'grzybica' },
    { name: 'nadmierne wypadanie włosów' },
    { name: 'świerzb' },
    { name: 'łupież' },
    { name: 'znamiona barwnikowe(pieprzyki)' },
    { name: 'opryszczka' },
    { name: 'kurzajki' },
    { name: 'laszaj' },
    { name: 'nadmierna potliwość' },
    { name: 'wszy' },
    { name: 'bóle w podbrzuszu' },
    { name: 'bardzo bolesne miesiączki' },
    { name: 'obfite krwawienia miesięczne' },
    { name: 'nieregularne cykle miesiączkowe' },
    { name: 'plamienia acykliczne' },
    { name: 'upławy' },
    { name: 'świąd i pieczenie pochwy' },
    { name: 'bóle w piersiach' },
    { name: 'zbyt wczesne lub opóźnione dojrzewanie' },
    { name: 'problemy z zajściem w ciążę' },
    { name: 'ból podczas lub po stosunku' },
    { name: 'krwawienia podczas lub po stosunku' },
    { name: 'suchość pochwy' },
    { name: 'objawy uboczne antykoncepcji hormonalnej' },
    { name: 'objawy ciąży' },
    { name: 'Gorączka' },
    { name: 'Dreszcze' },
    { name: 'Uczucie zmęczenia' },
    { name: 'Bóle kostno-stawowe' },
    { name: 'Bóle głowy' },
    { name: 'Katar' },
    { name: 'Kaszel' },
    { name: 'suchość w nosie' },
    { name: 'suchość w gardle' },
    { name: 'ból gardła' },
    { name: 'chrypka' },
    { name: 'stan podgorączkowy' },
    { name: 'ból zatok' },
    { name: 'złe samopoczucie' },
    { name: 'zmęczenie' },
    { name: 'kichanie' },
    { name: 'osłabienie' },
    { name: 'drapanie i pieczenie w gardle' },
    { name: 'Ból w klatce piersiowej(kłucie)' },
    { name: 'Zasinienie skóry' },
    { name: 'Obrzęki' },
    { name: 'Kołatanie serca' },
    { name: 'Omdlenia' },
    { name: 'Zmęczenie' },
    { name: 'Duszność' },
    { name: 'nadciśnienie tętnicze' },
    { name: 'apatia' },
    { name: 'uczucie zatkanego ucha' },
    { name: 'szumy uszne' },
    { name: 'ból ucha' },
    { name: 'pogorszenie słuchu' },
    { name: 'krwawienie z nosa' },
    { name: 'przewlekły katar' },
    { name: 'chrapanie' },
    { name: 'częsty ból gardła' },
    { name: 'dysfagia - zaburzenia połykania' },
    { name: 'oddychanie przez usta' },
    { name: 'zawroty głowy' },
    { name: 'przewlekłe bóle głowy' },
    { name: 'zaburzenia równowagi' },
    { name: 'zaburzenia węchu' },
    { name: 'zaburzenia smaku' },
    { name: 'guzy szyi i głowy.' },
    { name: 'mrowienie kończyn' },
    { name: 'ograniczenie pola widzenia' },
    { name: 'nagłe pogorszenie wzroku' },
    { name: 'zaburzenia mowy' },
    { name: 'poczucie ciągłego rozbicia, problemy ze skupieniem' },
    { name: 'kurcze mięśni' },
    { name: 'drżenie mięśni' },
    { name: 'zaburzenia czucia' },
    { name: 'problemy z koordynacją ruchową' },
    { name: 'problemy z pamięcią' },
    { name: 'zaburzenia snu' },
    { name: 'omdlenia' },
    { name: '﻿pogorszenie ostrości wzroku' },
    { name: 'częste mruganie' },
    { name: 'częste stany zapalne powiek i spojówek' },
    { name: 'mrużenie oczu podczas czytania' },
    { name: 'podwójne widzenie' },
    { name: '"mroczki" przed oczami' },
    { name: 'zaburzenia pola widzenia' },
    { name: 'swędzenie i pieczenie gałki ocznej' },
    { name: 'światłowstręt' },
    { name: 'przekrwienie oka' },
    { name: 'silny ból oczodołu' },
    { name: 'bóle głowy' },
    { name: '﻿nietrzymanie moczu' },
    { name: 'ból przy oddawaniu moczu' },
    { name: 'zmiany w moczu (białkomocz, krwiomocz, ropa w moczu, spieniony mocz, ciemna barwa moczu)' },
    { name: 'zmiany w ilości oddawanego moczu: więcej niż 7 razy na dobę, zbyt mała ilość oddawanego moczu' },
    { name: 'ból lub obrzęk jąder' },
    { name: 'uczucie parcia na pęcherz' },
    { name: 'ból po urazie w okolicach podbrzusza' },
    { name: 'pieczenie lub swędzenie cewki moczowej' },
    { name: 'zmiany w wyglądzie prącia (zaczerwienienia, obrzęki)' },
    { name: 'ból w dolnej części pleców' },
    { name: 'obrzęki nóg' },
    { name: 'świąd w okolicach stref intymnych' },
    { name: 'krosty w okolicach stref intymnych' },
    { name: 'zaczerwienienia w okolicach stref intymnych' },
    { name: 'obrzęki stref intymnych' },
    { name: 'ból w okolicach stref intymnych' },
    { name: 'owrzodzenia w okolicach stref intymnych' },
    { name: 'nieprzyjemny zapach w okolicach stref intymnych' },
    { name: 'zmiana konsystencji i koloru wydzielin;' },
    { name: 'pieczenie skóry w okolicach stref intymnych' },
  ]);




  return done();
};

