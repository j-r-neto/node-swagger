import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";

const app = express();
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API de manipulação de produtos com JSON DOCS',
            version: '2.0.0'
        }
    },
    apis: ['src/routes.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log(swaggerDocs);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/v1", router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});