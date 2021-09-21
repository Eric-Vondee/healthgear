const Hospital = require('../../models/hospitals.model');

module.exports = async(req,res) => {
    try{
        const {state} = req.query
        const hospital = await Hospital.find({state: new RegExp(state, 'i')})
        if(!hospital) return res.status(409).send({statusCode:404, message: 'hospital not found'})

        else{
            return res.status(200).send({
                statusCode: 200,
                message: 'hospitals fetched successfully',
                payload: hospital
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