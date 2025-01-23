import { ChatMistralAI, } from "@langchain/mistralai";
import { z } from "zod";

export const model = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 7
});


const joke = z.object({
  setup: z.string().describe("The setup of the joke"),
  punchline: z.string().describe("The punchline to the joke"),
  rating: z.number().optional().describe("How funny the joke is, from 1 to 10"),
});

import { PromptTemplate } from "@langchain/core/prompts";

const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a joke about {topic}"
);

await promptTemplate.invoke({ topic: "cats" });