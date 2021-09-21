const express = require('express');
const router = express.Router();


const {
    CreateUser,
    LoginUser,
    GetUser
} = require('../controllers/user/index');

router.post('/login', LoginUser );
router.post('/', CreateUser);
router.get('/:id', GetUser);

module.exports = router