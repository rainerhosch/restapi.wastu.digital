require('dotenv').config()
const tokenAuth = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).send('Unauthorized: API key is missing');
    }

    if (apiKey != process.env.API_KEY) {
        return res.status(401).send('Unauthorized: Invalid API key');
    }
    next();
};

module.exports = tokenAuth;