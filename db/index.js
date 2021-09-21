const mongoose = require('mongoose');
const config = require('../config');

module.exports = async() =>{
    try{
        //connect to mongodb
        await mongoose.connect(
            process.env.NODE_ENV === 'production'?
            config.MONGODB_URI: 'mongodb+srv://healthgear:healthgear@health.g33ru.mongodb.net/health-gear?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
				autoIndex: process.env.NODE_ENV === 'production' ? false : true,
				//useCreateIndex: true,
				useUnifiedTopology: true
            }
        )
        return console.log('Mongodb Connected')
    }
    catch(error){
        console.log(error)
    }
}