
// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger-output.json')


const uiOpts = {
    customSiteTitle: "API Wastu Digital",
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: "/public/img/favicon.ico"
    // customfavIcon: "/public/img/favicon-32x32.png"
};
function swaggerDocs(app, port) {
    
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, uiOpts));
    // Documentation in JSON format
    // app.get('../doc/swagger-output.json', (req, res) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.send(swaggerSpec);
    // });
}
module.exports = swaggerDocs;