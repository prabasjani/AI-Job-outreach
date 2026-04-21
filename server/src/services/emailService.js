export const generateEmail = async ({
  user,
  jobRole,
  company,
  jobDescription,
}) => {
  try {
    const prompt = `
You are a job applicant writing a highly professional and realistic job application email.

Candidate Details:
Name: ${user.name}
Skills: ${user.skills?.join(", ")}
Strengths: ${user.analysis?.strengths?.join(", ")}
Weak Areas: ${user.analysis?.missingSkills?.join(", ")}

Target Job:
Role: ${jobRole}
Company: ${company || "the company"}
Job Description: ${jobDescription || "Not provided"}

Instructions:
- Write like a real human (not robotic)
- Keep it concise (120–180 words)
- Start with a strong opening
- Mention relevant skills and strengths
- Align with job role
- Show enthusiasm for company
- Do NOT mention weaknesses directly
- End with polite closing

Format:
- Subject line
- Email body

Return plain text only (no JSON).
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
          model: "openrouter/free",
          messages: [
            {
              role: "system",
              content:
                "You are a professional career assistant who writes realistic job application emails.",
            },
            { role: "user", content: prompt },
          ],
          temperature: 0.6, // slightly creative
        }),
      },
    );

    const data = await aiResponse.json();
    return data.choices[0].message.content;
  } catch (err) {
    console.error("Email AI Error:", err);
    return "Failed to generate email. Please try again.";
  }
};
