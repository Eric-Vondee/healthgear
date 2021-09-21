const Hospital = require('../../models/hospitals.model');

module.exports = async(req,res) => {
    try{
        const {name, state, testingPlatform, phonenumber, email, location} = req.body

        const hospital = await Hospital.findOne({name: name})
        if(hospital) return res.status(409).send({statusCode:409, message: 'hospital already exists'})

        else{
             const createHospital = await Hospital.create({
                name, 
                state,
                testingPlatform,
                phonenumber,
                email,
                location
            })
            return res.status(200).send({
                statusCode: 200,
                message: 'hospital created successfully',
                payload: createHospital
            })
        }
    }
    catch(error){
        return res.status(500).send({
            statusCode: 500,
            message: 'error',
            payload: error.message
        })
    }
}