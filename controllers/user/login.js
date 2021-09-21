const User = require('../../models/users.model');
const jwt = require('jsonwebtoken');
const config = require('../../config')
const brcypt = require('bcrypt');

module.exports = async(req,res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email: email})
        if(!user) return res.status(404).send({statusCode: 404, message:"user doesn't exist"});
        
        
        //comapre stored and passed password 
        let compare = await brcypt.compare(password, user.password)
        if(!compare) return res.status(401).send({
            statusCode: 401, 
            message:'invalid email or password'
        });

        else{

            let token = jwt.sign({
                email
            }, config.JWT_SECRET, {expiresIn: '2 days'});

            return res.status(200).send({
                statusCode: 200,
                message: "Log in Successful",
                payload: {token, email, id: user.id, fullname: user.fullname, gender:user.gender}
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