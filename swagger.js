const swaggerAutogen = require("swagger-autogen")();

const doc = {
    swagger: "2.0",
    info: {
        "description": "Create a new Swagger file and add documentation for each route you see there. There are many ways to do this. Generate a visual UI and living documentation of your swagger.json.\n",
        "version": "1.0.0",
        "title": "Documentation to an API"
    },
    host: "localhost:8080",
    schemes: ["http"],
    };
const outputFile = "./models/swagger.json";
const endpointsFiles = ["./routes/index.js"]; 
//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);