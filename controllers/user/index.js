const CreateUser = require('./create');
const LoginUser = require('./login');
const GetUser = require('./get');

const UserController = Object.freeze({
    CreateUser,
    LoginUser,
    GetUser
})

module.exports = UserController