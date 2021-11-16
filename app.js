//Packages import
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

//Config
dotenv.config({ path: "config/.env" });

//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
