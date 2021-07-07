import express from "express";
const router = express.Router();
import {
  userRegister,
  userAuth,
  getUserProfile,
} from "../controllers/usersController.js";
import { protect } from "../midlewares/authMiddleware.js";

router.route("/").post(userRegister);
router.post("/login", userAuth);
router.route("/profile").get(protect, getUserProfile);

export default router;
