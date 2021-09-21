const mongoose = require('mongoose');
const schema = mongoose.Schema

const userSchema = new schema({
    fullname: {type: String},
    email: {type: String, unique: true},
    phonenumber: {type: String},
    password: {type:String},
    location: {
        lat: {type: Number},
        lng: {type: Number},
        address: {type:String}
    },
    gender: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);