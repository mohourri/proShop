import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/tokenGenerator.js";

const userAuth = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Email or Password is incorrect!");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }
  console.log(user);
  res.send({
    _id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

const userRegister = asyncHandler(async (req, res) => {
  console.log("hahahah");
  const { name, email, password } = req.body;
  console.log(name + email + password);
  const existing = await User.findOne({ email });
  console.log(existing);
  if (existing) {
    res.status(400);
    throw new Error("user already exist!");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(400);
    throw new Error("invalid user informations!");
  }

  res.status(201).json({
    name: user.name,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

export { userAuth, getUserProfile, userRegister };
