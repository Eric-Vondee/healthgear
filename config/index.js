const dotenv = require('dotenv');
dotenv.config();

module.exports ={
    BASE_URL: process.env.BASE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL_DOMAIN: process.env.EMAIL_DOMAIN,
    EMAIL_APIKEY: process.env.EMAIL_APIKEY,
    JWT_HEADER: {
        "typ": "JWT",
        "alg": "HS256"
    }
}