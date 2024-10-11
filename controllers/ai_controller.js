import { generateText } from "../model/ai_model.js";

async function handleGenerate(req, res) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text input is required" });
    }

    const aiResponse = await generateText(text);
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error generating text:", error);
    res.status(500).json({ error: "Failed to generate text" });
  }
}

export { handleGenerate };
