const User = require('../../models/users.model');
const bcrypt = require('bcrypt');

module.exports = async(req,res) => {
    try{
        const {id} = req.params

        const user = await User.findOne({_id: id})

        if(!user) return res.status(404).send({statusCode: 404, message:"user doesn't exist"});

        else{

            return res.status(200).send({
                statusCode: 200,
                message: 'user fetched successfully',
                payload: user
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