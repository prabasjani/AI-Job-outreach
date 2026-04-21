import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
import { completeOnboarding } from "../controllers/userController.js";

const router = express.Router();

router.post(
  "/onboarding",
  authMiddleware,
  upload.single("resume"),
  completeOnboarding,
);

export default router;
