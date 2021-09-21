const User = require('../../models/users.model');
const bcrypt = require('bcrypt');

module.exports = async(req,res) => {
    try{
        const {fullname, email, phonenumber, password, location, gender} = req.body

        const user = await User.findOne({email: email})
        const phone = await User.findOne({phone: phonenumber})
        if(user) return res.status(409).send({statusCode: 409, message:'email already exists'});
        if(phone) return res.status(409).send({statusCode: 409, message:`phonenumber ${phonenumber} already exists`});

        else{

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password.trim(), salt);
            const createUser = await User.create({
                fullname,
                email,
                phonenumber,
                password: hashedPassword,
                location,
                gender
            })
            return res.status(200).send({
                statusCode: 200,
                message: 'user created successfully',
                payload: createUser
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