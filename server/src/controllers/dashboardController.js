import User from "../models/User.js";
import { sanitizeUser } from "../utils/sanitizeUser.js";

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      user: {
        ...sanitizeUser(user),
        isAnalyzed: user.analysis?.score > 0,
        analysis: user.analysis || {},
      },
    });
  } catch (err) {
    console.error("Dashboard Error:", err);

    res.status(500).json({
      msg: "Failed to fetch dashboard",
      error: err.message,
    });
  }
};
