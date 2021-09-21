const express = require('express');
const router = express.Router();


const {
    CreateHospital,
    GetAllHospital,
    GetHospital
} = require('../controllers/hospitals/index');

router.post('/',  CreateHospital);
router.get('/', GetAllHospital);
router.get('/:id', GetHospital);

module.exports = router