
// const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../doc/swagger-output.json')
// const { specs, swaggerUi } = require("./swagger");
// const { specs, swaggerUi } = require("./swagger.doc");


const uiOpts = {
    customSiteTitle: "API Wastu Digital",
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: "https://raw.githubusercontent.com/rainerhosch/restapi.wastu.digital/refs/heads/main/public/img/favicon.ico",
    // customfavIcon: "/public/img/favicon-32x32.png"
};
function swaggerDocs(app, port) {
    
    // Swagger Page
    app.use('/api-docs', 
        swaggerUi.serve, 
        swaggerUi.setup(swaggerDocument, uiOpts)
    );
}
module.exports = swaggerDocs;