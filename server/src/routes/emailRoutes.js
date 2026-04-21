import express from "express";
import { generateJobEmail } from "../controllers/emailController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/generate", authMiddleware, generateJobEmail);

export default router;
