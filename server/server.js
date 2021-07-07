import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import colors from "colors";
import productRoutes from "./routes/product_routes.js";
import userRoutes from "./routes/user_routes.js";
import { notFound, errorHandler } from "./midlewares/errorMiddleware.js";
dotenv.config();
const app = express();
app.use(express.json());
connectDB();

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running...".green.inverse);
});

app.use(errorHandler);
app.use(notFound);

app.listen(
  PORT,
  console.log(`running in ${ENV} mode at port ${PORT}`.yellow.bold)
);
