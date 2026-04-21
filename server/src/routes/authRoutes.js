import express from "express";
import {
  register,
  login,
  refreshAccessToken,
  logout,
} from "../controllers/authController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshAccessToken);

// Protected route
router.post("/logout", authMiddleware, logout);

export default router;
