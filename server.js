const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');

// const tokenAuth = require('./src/middleware/api-key');
const generateToken = require('./src/middleware/jwt');

// const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/config/swagger.config');
const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
    origin: `http://localhost:${port}`
};
app.use(cors(corsOptions));

//** route */
const mahasiswaRouter = require('./src/routes/mahasiswa');


// Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
swaggerDocs(app, port)
 // Start of Selection
app.get('/', (req, res) => {
    res.redirect('/api-docs'); //redirect ke halaman dokumentasi 
});

// Login Route
const user = {
    id: 1,
    username: 'johnDoe',
    password: 'password',
};
app.post('/get-token', (req, res) => {
    const { username, password } = req.body;
    // Check if username and password match
    if (req.body.username === user.username || req.body.password === user.password) {
        // Generate JWT token
        const token = generateToken(user);
    
        res.json({
            success: true,
            message: 'Authentication successful!',
            token: token,
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid username or password',
        });
    }
});


// Middleware for JWT Token Validation
const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Bearer <token>
        
        jwt.verify(token, process.env.API_KEY, (err, payload) => {
        if (err) {
            return res.status(403).json({
            success: false,
            message: 'Invalid token',
            });
        } else {
            req.user = payload;
            next();
        }
        });
    } else {
        res.status(401).json({
        success: false,
        message: 'Token is not provided',
        });
    }
};


// calling routes
// routes(app);
app.use('/api/v1/mahasiswa', mahasiswaRouter)


app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
})