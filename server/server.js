const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const products = require("./data/products");
const app = express();
const connectDB = require("./config/db.config");
connectDB();
const colors = require("colors");
const productRoutes = require("./routes/product_routes");

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("server is running...".green.inverse);
});

app.listen(
  PORT,
  console.log(`running in ${ENV} mode at port ${PORT}`.yellow.bold)
);
