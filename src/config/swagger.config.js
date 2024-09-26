
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger-output.json')

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'WASTUDIG REST API',
//             description: "API endpoints for Wastu Digital services",
//             contact: {
//                 name: "Rizky Oktan",
//                 email: "rizkyoktan@wastukancana.ac.id",
//                 url: "https://www.rzoktan.tech/"
//             },
//             version: '1.0.0',
//         },
//         servers: [
//             {
//                 url: 'http://localhost:3000/',
//                 description: "Local server"
//             },
//             {
//                 url: "https://api.wastu.digital",
//                 description: "Live server"
//             },
//         ],
//     },
//     apis: ['../router/mahasiswa.routes.js'], // Pastikan path ini benar
//     components: {
//         schemas: {
//             Mahasiswa: {
//                 type: 'object',
//                 properties: {
//                     id_pd: {
//                         type: 'integer',
//                         description: 'ID mahasiswa',
//                     },
//                     nama: {
//                         type: 'string',
//                         description: 'Nama mahasiswa',
//                     },
//                     alamat: {
//                         type: 'string',
//                         description: 'Alamat mahasiswa',
//                     },
//                     email: {
//                         type: 'string',
//                         format: 'email',
//                         description: 'Email mahasiswa',
//                     },
//                 },
//                 required: ['id_pd', 'nama', 'alamat', 'email'],
//             },
//         },
//     },
// };

// const swaggerSpec = swaggerJSDoc(options);
function swaggerDocs(app, port) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    // Documentation in JSON format
    app.get('../doc/swagger-output.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}
module.exports = swaggerDocs;