import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express App APIs',
            version: '1.0.0',
            description: 'Express App APIs documentation',
        },
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'Bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
    },
    apis: ['./src/swagger/*.js'],
    tags: [
        {
            name: "Auth"
        },
        {
            name: "User"
        }
    ]
}

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
