import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: { type: String, required: true },

    skills: { type: [String], default: [] },

    resumeUrl: { type: String, default: "" },

    refreshToken: {
      type: String,
      default: null,
    },

    onboardingCompleted: {
      type: Boolean,
      default: false,
    },

    analysis: {
      score: { type: Number, default: 0 },
      strengths: { type: [String], default: [] },
      missingSkills: { type: [String], default: [] },
      suggestions: { type: [String], default: [] },
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
