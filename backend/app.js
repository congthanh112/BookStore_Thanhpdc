const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const booksRouter = require("./route/book.route");
const categoryRouter = require("./route/category.route");
const subCategoryRouter = require("./route/subCategory.route");

require("dotenv").config();

//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 8000;

const swaggerOption = {
  swaggerDefinition: {
    info: {
      title: "BookStore API",
      description: "API for Thanhpdc's BookStore",
      version: '1.0.0',
      servers: [
        {
          url: "http://localhost:8000"
        }
      ]
    }
  },
  apis: ["./route/*.js"]
};

const swaggerDoc = swaggerJsDoc(swaggerOption);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

//parse request data content type application/x-www-formm-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

//define Route
const api_prefix = process.env.API_PREFIX
app.use(`${api_prefix}/book`, booksRouter)
app.use(`${api_prefix}/category`, categoryRouter)
app.use(`${api_prefix}/sub-category`, subCategoryRouter)

app.listen(port, () => {
  console.log(`Your book store is running at http://localhost:${port}`);
});
