import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import Footer from "../layout/Footer";

export default function Land() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold font-mont tracking-tight mb-6">
          Land More Interviews with{" "}
          <span className="text-primary">AI-Powered Outreach</span>
        </h1>

        <p className="max-w-xl mb-6">
          Upload your resume, get instant ATS analysis, identify skill gaps, and
          generate personalized job application emails — all in one place.
        </p>

        <div className="flex gap-4 w-100 items-center justify-center">
          <Link
            to="/register"
            className="bg-accent border border-accent hover:bg-hover/75 px-6 py-2 font-semibold rounded-xl w-full"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border hover:border-hover hover:text-hover px-6 py-2 font-semibold rounded-xl w-full"
          >
            Login
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <GlassCard>
          <h3>🧠 AI Resume Analysis</h3>
          <p>
            Get ATS score, strengths, missing skills, and actionable suggestions
            instantly.
          </p>
        </GlassCard>

        <GlassCard>
          <h3>🎯 Smart Targeting</h3>
          <p>
            Define your target role and align your profile with industry needs.
          </p>
        </GlassCard>

        <GlassCard>
          <h3>✉️ Email Generator</h3>
          <p>
            Create personalized job outreach emails tailored to each company.
          </p>
        </GlassCard>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-4 text-center">
        <h2>How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <p className="text-hover! font-black text-lg! mb-2!">1</p>
            <p>Upload your resume</p>
          </div>

          <div>
            <p className="text-hover! font-black text-lg! mb-2!">2</p>
            <p>Analyze & improve profile</p>
          </div>

          <div>
            <p className="text-hover! font-black text-lg! mb-2!">3</p>
            <p>AI Generates emails</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-4 text-center mt-8">
        <h2 className="mb-4!">Stop Applying Blindly. Start Applying Smart.</h2>

        <Link
          to="/register"
          className="bg-accent border border-accent hover:bg-hover/75 px-6 py-2 rounded-xl text-sm text-gray-800 font-semibold"
        >
          Start for Free
        </Link>
      </section>

      <Footer />
    </div>
  );
}
