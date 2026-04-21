// (Better Architecture): Response Formatter

export const sanitizeUser = (user) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    skills: user.skills,
    resumeUrl: user.resumeUrl,
    onboardingCompleted: user.onboardingCompleted,
  };
};
