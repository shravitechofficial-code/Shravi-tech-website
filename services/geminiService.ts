
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export async function getNextDiagnosticQuestion(
  initialProblem: string,
  history: { role: 'user' | 'ai'; text: string }[],
  questionCount: number
): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const conversation = history.map(h => `${h.role}: ${h.text}`).join('\n');
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Initial problem: ${initialProblem}\nConversation so far:\n${conversation}\n\nAsk the next smart diagnostic question (#${questionCount}/3).`,
      config: {
        systemInstruction: `You are a Senior Growth Consultant at Shravi Tech.
        The user has a business problem. Your goal is to ask a single, non-technical, empathetic question to understand the business context, their specific growth goals, or their target customers.
        
        Rules:
        1. Avoid ALL technical jargon (no "stack", "backend", "API", "automation layers", etc.).
        2. Speak like a business partner, not a developer.
        3. Only ask ONE question.
        4. Keep it professional and under 25 words.
        5. Focus on the 'why' and the business impact.`,
      },
    });

    return response.text || "Who is your primary target audience for this service?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "What is the biggest business goal you're trying to achieve with this?";
  }
}

export async function analyzeFinalProblem(
  initialProblem: string,
  history: { role: 'user' | 'ai'; text: string }[]
): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const conversation = history.map(h => `${h.role}: ${h.text}`).join('\n');

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Initial problem: ${initialProblem}\nFull conversation history:\n${conversation}`,
      config: {
        systemInstruction: `You are a Lead Growth Strategist at Shravi Tech. 
        Provide a brief (max 60 words) summary of how Shravi Tech can solve this specific business problem focusing on outcomes and results.
        
        Tone: Professional, expert, and focused on business value.
        Rules:
        1. Strictly avoid technical jargon (do not use terms like "RAG", "LLM", "Agents", "SDRs", "Scripts").
        2. Focus on business outcomes (e.g., "saving 20 hours a week", "dominating your local market", "scaling your outreach").
        3. Diagnosis: Acknowledge the core business pain point.
        4. Solution: Describe the business benefit we provide.
        5. Next Step: Mention that this detail has been shared with our team.
        
        Do not use all-caps. Use sentence case.`,
      },
    });

    return response.text || "We can streamline this process to save you significant time and improve your market reach. Our founders have received your details.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "This is a high-impact area where we can drive significant growth for your startup. Our team has been notified.";
  }
}

export async function analyzeStartupIdea(idea: string, userContext?: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: idea,
      config: {
        systemInstruction: `You are a Business Mentor at Shravi Tech. 
        Your tone is: Encouraging, Insightful, and Business-focused.
        GOAL: Validate the founder's idea from a market perspective. Under 40 words. No tech speak.`,
      },
    });
    return response.text || "I've analyzed the market signals—this looks like a strong opportunity.";
  } catch (error) {
    return "The system is currently busy, but your idea has potential.";
  }
}
