//creating authenticated routes
import express from "express";
const router = express.Router();
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limiter";

const apiLimiter = rateLimiter({
  windiwMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests please try again in 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
