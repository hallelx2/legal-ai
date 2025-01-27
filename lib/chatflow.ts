import React, { useState, useEffect, useRef } from 'react';
import { Flow, Params } from "react-chatbotify";
import { GeminiService } from '../services/gemini';
import { AGREEMENT_TYPES } from '../config/agreements';
import { ChatMessage } from '../types/chatbot';

const geminiService = new GeminiService(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const ChatFlow: Flow = {
  start: {
    message:
      "Hi! 👋 I'm your legal document assistant. How can I help you today?",
    path: "default",
    options: [
      "📄 Create New Document",
      "🔍 Track Documents",
      "🤝 Legal Agreement Guide",
      "🔒 Security & Compliance",
      "💳 Pricing Plans",
      "❓ Help & Support",
    ],
  },

  default: {
    message: async (params: Params) => {
      switch (params.userInput) {
        case "📄 Create New Document":
          params.goToPath("createDocument");
          return "Let's create a new document. What type would you like to create?";

        case "🔍 Track Documents":
          params.goToPath("trackDocuments");
          return "You can view all your documents and their status here. What would you like to check?";

        case "🤝 Legal Agreement Guide":
          params.goToPath("legalGuide");
          return "I can help you choose and understand different types of legal agreements. What type interests you?";

        case "🔒 Security & Compliance":
          params.goToPath("security");
          return "Our platform ensures your documents are secure and compliant. What would you like to know more about?";

        case "💳 Pricing Plans":
          params.goToPath("pricing");
          return "We offer several plans to suit different needs. Which would you like to learn about?";

        case "❓ Help & Support":
          params.goToPath("support");
          return "How can I assist you today?";

        default:
          return "I didn't quite catch that. Please select one of the available options.";
      }
    },
    path: "error",
  },

  legalGuide: {
    message: "Which type of agreement would you like to learn about?",
    options: AGREEMENT_TYPES.map(type => type.name),
    path: "generateAgreementGuidance",
  },

  generateAgreementGuidance: {
    message: async (params: Params) => {
      const selectedAgreement = AGREEMENT_TYPES.find(
        type => type.name === params.userInput
      );

      if (!selectedAgreement) {
        params.goToPath("error");
        return "Sorry, I couldn't find information about that agreement type.";
      }

      try {
        const guidance = await geminiService.getAgreementGuidance(selectedAgreement);
        params.goToPath("followUp");
        return `${guidance}\n\nWould you like to know more about specific aspects or start creating this document?`;
      } catch (error) {
        params.goToPath("error");
        return "I apologize, but I'm having trouble generating detailed guidance right now. Please try again or select another option.";
      }
    },
    path: "followUp",
  },

  followUp: {
    message: "What would you like to do next?",
    options: [
      "✍️ Create This Document",
      "📚 More Details",
      "🏠 Return to Main Menu",
      "💬 Ask Specific Question",
    ],
    path: "handleFollowUp",
  },

  handleFollowUp: {
    message: async (params: Params) => {
      switch (params.userInput) {
        case "✍️ Create This Document":
          params.goToPath("createDocument");
          return "Great! Let's start creating your document. Would you like a guided process or quick setup?";

        case "📚 More Details":
          params.goToPath("moreDetails");
          return "What specific aspect would you like to know more about?";

        case "🏠 Return to Main Menu":
          params.goToPath("start");
          return "Returning to main menu...";

        case "💬 Ask Specific Question":
          params.goToPath("askQuestion");
          return "What would you like to know about this agreement?";

        default:
          params.goToPath("error");
          return "I didn't understand that choice. Please select from the available options.";
      }
    },
    path: "handleFollowUp",
  },

  // Additional paths for document creation, tracking, etc.
  createDocument: {
    message: "How would you like to proceed with document creation?",
    options: ["Guided Process", "Quick Setup", "Upload Existing"],
    path: "documentCreation",
  },

  documentCreation: {
    message: async (params: Params) => {
      switch (params.userInput) {
        case "Guided Process":
          return "I'll guide you through each step. First, let's gather some basic information...";
        case "Quick Setup":
          return "Here's a template you can quickly customize...";
        case "Upload Existing":
          return "You can upload your document in PDF, DOCX, or DOC format...";
        default:
          return "Please select a valid option.";
      }
    },
    path: "loop",
  },

  error: {
    message: "I'm sorry, I couldn't process that request. How else can I help you?",
    path: "start",
    options: ["Return to Main Menu", "Try Again", "Contact Support"],
  },

  loop: {
    message: "Is there anything else you'd like to know?",
    path: "default",
    options: [
      "📄 Create New Document",
      "🔍 Track Documents",
      "🤝 Legal Agreement Guide",
      "🔒 Security & Compliance",
      "💳 Pricing Plans",
      "❓ Help & Support",
    ],
  },
};
