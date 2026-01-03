
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export async function analyzeStartupIdea(idea: string, userContext?: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: idea,
      config: {
        systemInstruction: `You are the Lead AI Strategist at Shravi Tech (IIM-A alumni-led firm). 
        Your tone is: Professional, Expert, Concise, and Direct.
        
        GOAL: Validate the founder's idea and move them toward a lead capture.
        
        RESPONSE STRUCTURE:
        1. VALIDATION: 1 sentence on the market opportunity.
        2. THE EDGE: 1 sentence on how Shravi's AI-powered execution would accelerate their speed.
        3. THE HOOK: Briefly ask for their contact details to send our "0-1 GTM Launch Checklist".
        
        Do NOT use all-caps for emphasis. Keep it under 50 words. Professional sentence case only. No fluff.`,
      },
    });

    return response.text || "I've analyzed the signals—this has strong potential. I need your email to send the full 0-1 validation checklist.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is currently processing heavy load. Let's skip the AI and get you straight on a strategy call with our founders.";
  }
}
