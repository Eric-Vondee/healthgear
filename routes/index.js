const express = require('express');
const router = express.Router();

const UserRouter = require('./user');
const HospitalRouter = require('./hospitals');

router.use('/users', UserRouter);
router.use('/hospitals', HospitalRouter);

module.exports = router