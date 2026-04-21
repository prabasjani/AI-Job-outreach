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
      { new: true },
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
