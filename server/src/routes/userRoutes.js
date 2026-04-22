import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
import { completeOnboarding } from "../controllers/userController.js";
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post(
  "/onboarding",
  authMiddleware,
  upload.single("resume"),
  completeOnboarding,
);
router.get("/me", authMiddleware, getProfile);
router.put("/me", authMiddleware, updateProfile);
router.delete("/me", authMiddleware, deleteProfile);

export default router;
