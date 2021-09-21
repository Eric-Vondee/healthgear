const CreateHospital = require('./create');
const GetAllHospital = require('./getAll');
const GetHospital = require('./get');

const HospitalController = Object.freeze({
    CreateHospital,
    GetAllHospital,
    GetHospital
})

module.exports = HospitalController;