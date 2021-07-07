import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import users from "./data/users.js";
import connectDB from "./config/db.config.js";
import User from "./Models/userModel.js";
import Product from "./Models/productModel.js";
import Order from "./Models/orderModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();

    const insertedUsers = await User.insertMany(users);

    const admin = insertedUsers[0]._id;

    const productsToInsert = products.map((product) => {
      return { ...product, user: admin };
    });

    await Product.insertMany(productsToInsert);

    console.log("Data imported succefully !");
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();

    console.log("Data Distroyed succefully !".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
