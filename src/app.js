import express from "express";
import cors from "cors";

import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from "./swagger/index.swagger.js";

import Indexrouter from "./routes/index.route.js";
import { mainErrorHandler, notFoundHandler } from "./middlewares/error.middleware.js";


// Intialize app
const app = express();

// setup body parser
app.use(express.json())

// setup body parser
app.use(cors())

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get('/health-check', (_, res) => {
    return res.send("OK")
})

// Importing all routes
app.use('/api/v1', Indexrouter)

// Error handling
app.use('*', notFoundHandler)
app.use(mainErrorHandler)

export default app