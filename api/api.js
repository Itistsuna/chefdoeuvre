const express = require("express");
const app = express();
var cors = require("cors");
const connect = require("./src/database/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/************************** MidlleWare ****************************/

// CORS middleware
app.use(cors());
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Request-Headers: Authorization");
  next();
};
app.use(allowCrossDomain);

/************************** connection mysql ****************************/
require("./src/database/db");

/************************** Routes ****************************/
require('./src/routes/sign/sign_up')(app,connect)
require("./src/routes/sign/sign_in")(app,connect)
require('./src/routes/products/createProduct')(app,connect)
require('./src/routes/products/updateProduct')(app,connect)
require('./src/routes/products/deleteProduct')(app,connect)
require('./src/routes/middlewares/token')(app,connect)

app.listen(8080, function() {
  console.log("server listening on: http://localhost:8080/");
});