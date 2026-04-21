import User from "../models/User.js";
import { sanitizeUser } from "../utils/sanitizeUser.js";

export const completeOnboarding = async (req, res) => {
  try {
    const userId = req.user.id;

    const resumePath = req.file?.path;
    const { skills } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        resumeUrl: resumePath,
        skills: skills ? skills.split(",") : [],
        onboardingCompleted: true,
      },
      { new: true },
    );

    res.json({
      msg: "Onboarding completed",
      user: sanitizeUser(updatedUser),
    });
  } catch (err) {
    res.status(500).json({ msg: "Onboarding failed" });
  }
};
