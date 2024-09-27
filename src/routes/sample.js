// routes/sample.js
/**
 * @swagger
 * paths:
 * /sample:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
const express = require('express');
const sampleRouter = express.Router();

sampleRouter.get('/sample', (req, res) => {
    res.json({ message: 'This is a sample message' });
});

module.exports = sampleRouter;