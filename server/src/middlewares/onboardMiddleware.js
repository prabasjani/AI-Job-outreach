import User from "../models/User.js";

export const requireOnboarding = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user.onboardingCompleted) {
    return res.status(403).json({
      msg: "Complete onboarding first",
    });
  }

  next();
};
