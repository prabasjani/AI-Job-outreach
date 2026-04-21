import User from "../models/User.js";
import { generateEmail } from "../services/emailService.js";

export const generateJobEmail = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user || !user.analysis) {
      return res.status(400).json({ msg: "User analysis not found" });
    }

    const { jobRole, company, jobDescription } = req.body;

    if (!jobRole) {
      return res.status(400).json({ msg: "Job role is required" });
    }

    const email = await generateEmail({
      user,
      jobRole,
      company,
    });

    res.json({ msg: "Email generated", email });
  } catch (err) {
    console.error("Email Error:", err);

    res.status(500).json({
      msg: "Failed to generate email",
      error: err.message,
    });
  }
};
