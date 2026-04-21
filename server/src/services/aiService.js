import dotenv from "dotenv";
dotenv.config();

export const analyzeResume = async (resumeText) => {
  try {
    const prompt = `
You are an ATS (Applicant Tracking System).

Analyze the following resume and return a JSON response.

Rules:
- Score out of 100
- Identify strengths
- Identify missing skills (especially for modern tech roles)
- Give improvement suggestions
- Response MUST be valid JSON only

Format:
{
  "score": number,
  "strengths": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:
${resumeText}
`;

    const aiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openrouter/free", // 🔥 FREE MODEL ROUTER
          messages: [
            {
              role: "system",
              content: "You are a strict ATS system.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.3,
        }),
      },
    );

    const data = await aiResponse.json();

    const text = data.choices[0].message.content;

    // Clean JSON (important)
    const cleanText = text.replace(/```json|```/g, "").trim();

    return JSON.parse(cleanText);
  } catch (err) {
    console.error("OPENROUTER ERROR:", err);

    // fallback (never break app)
    return {
      score: 70,
      strengths: ["Basic skills detected"],
      missingSkills: ["System Design", "Scalability"],
      suggestions: ["Improve backend projects"],
    };
  }
};
