import { AgreementType } from "@/types/chatbot";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating Gemini response:", error);
      throw new Error("Failed to generate AI response");
    }
  }

  async getAgreementGuidance(agreementType: AgreementType): Promise<string> {
    const enhancedPrompt = `
      As a legal documentation expert, provide detailed guidance on ${agreementType.name}.
      ${agreementType.prompt}
      Include practical examples and common use cases.
      Format the response in a clear, structured way.
    `;
    return this.generateResponse(enhancedPrompt);
  }
}
