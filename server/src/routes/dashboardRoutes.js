import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { requireOnboarding } from "../middlewares/onboardMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, requireOnboarding, getDashboard);

export default router;
