const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");

// const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/config/swagger.config');
const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
    origin: `http://localhost:${port}`
};
// app.use(cors(corsOptions));

//** route */
const mahasiswaRouter = require('./src/router/mahasiswa.routes');


// parse application/json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// calling routes
// var routes = require('./src/router/mahasiswa.js')
// routes(app);
app.use('/api/v1/mahasiswa', mahasiswaRouter)

swaggerDocs(app, port)

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
})