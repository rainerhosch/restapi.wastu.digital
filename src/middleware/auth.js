const User = require('../models/mahasiswa.model');

const authenticateKey = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).send('Unauthorized: API key is missing');
    }

    const user = await User.findOne({ apiKey });

    if (!user) {
        return res.status(401).send('Unauthorized: Invalid API key');
    }

    // Rate limiting logic:
    const today = new Date().toISOString().split('T')[0];
    const usageIndex = user.usage.findIndex((day) => day.date === today);

    if (usageIndex >= 0) {
        if (user.usage[usageIndex].count >= user.rateLimit || user.rateLimit === 0) {
            return res.status(429).send('Too many requests');
        }
        user.usage[usageIndex].count++;
    } else {
        user.usage.push({ date: today, count: 1 });
    }

    await user.save();
    req.user = user;
    next();
};

module.exports = authenticateKey;