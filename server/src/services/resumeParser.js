import fs from "fs";
import pdfParse from "pdf-parse/lib/pdf-parse.js"; // 🔥 direct import use pdf-parse@1.1.1
// Choosing the right library saves more time than fixing the wrong one.

export const parseResume = async (filePath) => {
  try {
    const buffer = fs.readFileSync(filePath);
    const data = await pdfParse(buffer);

    if (!data.text || data.text.trim().length === 0) {
      throw new Error("Empty PDF");
    }
    return data.text;
  } catch (err) {
    throw new Error("Failed to parse resume");
  }
};
