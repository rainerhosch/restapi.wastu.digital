const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
const doc = {
    info: {
        version: '',                                                    // by default: '1.0.0'
        title: 'WASTUDIG REST API',                                     // by default: 'REST API'
        description: 'API endpoints for Wastu Digital services',        // by default: ''
        contact: {
            name: "Rizky Oktan",
            email: "rizkyoktan@wastukancana.ac.id",
            url: "https://www.rzoktan.tech/"
        },
    },
    servers: [
        {
        url: 'http://localhost:3000/',              // by default: 'http://localhost:3000'
        description: 'Local server'       // by default: ''
        },
        // {
        // url: 'https://api.wastu.digital',              // by default: 'http://localhost:3000'
        // description: 'Live server'       // by default: ''
        // },
        // { ... }
    ],
    // tags: [                   // by default: empty Array
    //     {
    //     name: '',             // Tag name
    //     description: ''       // Tag description
    //     },
    //     // { ... }
    // ],
    // components: {}            // by default: empty object
};

const outputFile = '../../src/doc/swagger-output.json';
const routes = ['../../server.js'];
// const routes = ['./src/router/mahasiswa.routes.js', './server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('../../server.js'); // Your project's root file
});