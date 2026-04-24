import User from "../models/User.js";
import { sanitizeUser } from "../utils/sanitizeUser.js";
import { parseResume } from "../services/resumeParser.js";
import { analyzeResume } from "../services/aiService.js";

export const completeOnboarding = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res.status(400).json({ msg: "Resume file is required" });
    }

    const resumePath = req.file?.path;
    const { skills } = req.body;

    // Parse resume safely
    let resumeText = "";
    try {
      resumeText = await parseResume(resumePath);
    } catch (err) {
      return res.status(400).json({ msg: "Invalid PDF file" });
    }

    // 2. AI analysis
    const analysis = await analyzeResume(resumeText);

    // 3. Save user data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        resumeUrl: resumePath,
        skills: skills ? skills.split(",") : [],
        onboardingCompleted: true,
        analysis: analysis,
      },
      { returnDocument: "after" },
    );

    res.json({
      msg: "Onboarding completed",
      user: sanitizeUser(updatedUser),
      resumeAnalysis: analysis,
    });
  } catch (err) {
    res.status(500).json({ msg: "Onboarding failed" });
  }
};

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -refreshToken",
    );

    res.json({ user });
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch profile" });
  }
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {
    const updates = req.body;

    // Prevent updating sensitive fields directly
    delete updates.password;
    delete updates.refreshToken;

    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      returnDocument: "after",
      runValidators: true,
    });

    res.json({ user: sanitizeUser(user), msg: "Profile Updated" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to update profile" });
  }
};

// DELETE PROFILE
export const deleteProfile = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);

    res.json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete user" });
  }
};
