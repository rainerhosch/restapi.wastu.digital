const jwt = require('jsonwebtoken');
require('dotenv').config()


const generateToken = (payload) => {
    const secretKey = process.env.API_KEY || ''; // Replace with your own secret key
    const options = {
        expiresIn: '1h', // Token expiration time
    };

    const token = jwt.sign(payload, secretKey, options);
    return token;
};

module.exports = generateToken;