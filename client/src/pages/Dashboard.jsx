import { useEffect, useState } from "react";
import API from "../api/client";
import Layout from "../layout/Layout";
import GlassCard from "../components/GlassCard";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard").then((res) => setData(res.data.user));
  }, []);

  if (!data) return <Loader />;

  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-6">
        <GlassCard>
          <p className="text-gray-400">ATS Score</p>
          <h2 className="text-4xl! text-primary! font-black mt-2! mb-0!">
            {data.analysis?.score || 0}%
          </h2>
        </GlassCard>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <GlassCard>
          <h3>Core Strengths</h3>

          {data.analysis?.strengths?.length &&
            data.analysis.strengths.map((strength) => (
              <p
                className="mb-2.5 hover:text-gray-900! cursor-pointer"
                key={strength}
              >
                {strength}
              </p>
            ))}
        </GlassCard>
        <GlassCard>
          <h3>Missing Skills</h3>

          {data.analysis?.missingSkills?.length ? (
            data.analysis.missingSkills.map((skill) => (
              <p
                className="mb-2.5 hover:text-gray-900! cursor-pointer"
                key={skill}
              >
                {skill}
              </p>
            ))
          ) : (
            <p>No Skill gaps 🎉</p>
          )}
        </GlassCard>

        <GlassCard>
          <h3>Suggestions</h3>
          {data.analysis?.suggestions?.map((suggestion) => (
            <p
              className="mb-2.5 hover:text-gray-900! cursor-pointer"
              key={suggestion}
            >
              {suggestion}
            </p>
          ))}
        </GlassCard>
      </div>
    </Layout>
  );
}
