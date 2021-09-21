const mongoose = require('mongoose');
const schema = mongoose.Schema

const hospitalSchema = new schema({
    name: {type: String},
    state: {type: String, text:true},
    testingPlatform: {type: String},
    phonenumber: {type: String},
    email: {type: String},
    location: {
        lat: {type: Number},
        lng: {type: Number},
        address: {type:String}
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('hospital', hospitalSchema);