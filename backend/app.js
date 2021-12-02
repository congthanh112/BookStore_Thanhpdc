const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const booksRouterAdmin = require("./route/admin.bookRoute");
const categoryRouterAdmin = require("./route/admin.categoryRoute");
const subCategoryRouterAdmin = require("./route/admin.subCategoryRoute");
const booksRouterUser = require("./route/user.bookRoute");
const categoryRouterUser = require("./route/user.categoryRoute");
const subCategoryRouterUser = require("./route/user.subCategoryRoute");

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
app.use(`${api_prefix}/user/books`, booksRouterUser)
app.use(`${api_prefix}/user/categories`, categoryRouterUser)
app.use(`${api_prefix}/user/sub-categories`, subCategoryRouterUser)

app.use(`${api_prefix}/admin/books`, booksRouterAdmin)
app.use(`${api_prefix}/admin/categories`, categoryRouterAdmin)
app.use(`${api_prefix}/admin/sub-categories`, subCategoryRouterAdmin)

app.listen(port, () => {
  console.log(`Your book store is running at http://localhost:${port}`);
});
