import { GoogleGenAI } from "@google/genai";

async function generateLogo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: "A professional and modern logo for a business automation agency called 'Zarza Automation Studio'. The logo should be designed for a dark theme (background #0d1117). It should feature a clean, minimalist icon representing automation or intelligence (e.g., a stylized gear, circuit, or spark) combined with the text 'Zarza Automation Studio' in a sophisticated, readable font. Use a professional color palette like emerald green, electric blue, and silver. The overall feel should be high-tech, efficient, and premium. High resolution.",
        },
      ],
    },
    config: {
      imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
        }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return part.inlineData.data;
    }
  }
}

export { generateLogo };
