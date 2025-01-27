import { Flow, Params } from "react-chatbotify";


export const ChatFlow: Flow = {
    start: {
      message: "Hi! 👋 How can I help you today? You can ask about creating documents, tracking signatures, security, subscription plans, or troubleshooting issues.",
      path: "default",
      options: [
        "📄 Creating and Sending Documents",
        "🔍 Tracking Document Status",
        "🔒 Security and Compliance",
        "💳 Subscription Plans",
        "⚙️ Technical Issues",
      ],
    },
    loop: {
        message:"How else can i help you?",
    path: "default",
      options: [
        "📄 Creating and Sending Documents",
        "🔍 Tracking Document Status",
        "🔒 Security and Compliance",
        "💳 Subscription Plans",
        "⚙️ Technical Issues",
      ],
    },
    error: {
        message:"Im sorry i do not know, Here are ways i can help you",
    path: "default",
      options: [
        "📄 Creating and Sending Documents",
        "🔍 Tracking Document Status",
        "🔒 Security and Compliance",
        "💳 Subscription Plans",
        "⚙️ Technical Issues",
      ],
    },
    default: {
      message: (params: Params) => {
        switch (params.userInput) {
          case "📄 Creating and Sending Documents":
            params.goToPath("creatingDocuments");
            return "To create a document for signing, you can upload a file, add signature fields, and send it to recipients.";
          case "🔍 Tracking Document Status":
            params.goToPath("trackingStatus");
            return "You can track your document's status in the 'Documents' section of your dashboard.";
          case "🔒 Security and Compliance":
            params.goToPath("security");
            return "We use industry-standard encryption and comply with regulations like eIDAS and ESIGN.";
          case "💳 Subscription Plans":
            params.goToPath("subscriptions");
            return "We offer three plans: Basic, Pro, and Enterprise. Which one do you want to know more about?";
          case "⚙️ Technical Issues":
            params.goToPath("technicalIssues");
            return "What issue are you facing? Choose from the following options.";
          default:
            return "Sorry, I didn’t understand that. Please select an option.";
        }
      },
      path: "error",
    },
    creatingDocuments: {
      message: (params: Params) =>
        "Would you like detailed steps or a quick overview?",
      options: ["Detailed Steps", "Quick Overview"],
      path: "documentSteps",
    },
    documentSteps: {
      message: (params: Params) => {
        switch (params.userInput) {
          case "Detailed Steps":
            return (
              "1. Log in to your account.\n" +
              "2. Click 'New Document'.\n" +
              "3. Upload your file.\n" +
              "4. Drag and drop signature fields.\n" +
              "5. Add recipient email addresses and send!"
            );
          case "Quick Overview":
            return "Upload your file, add signature fields, and send it to recipients in just a few clicks!";
          default:
            return "Please select a valid option.";
        }
      },
      path: "loop",
    },
    trackingStatus: {
      message: (params: Params) =>
        "Click 'Dashboard' → 'Documents' → 'Sent'. You'll see the document's status (e.g., Pending, Signed).",
      path: "loop",
    },
    security: {
      message: (params: Params) =>
        "Do you want more details about encryption or compliance standards?",
      options: ["Encryption", "Compliance Standards"],
      path: "securityDetails",
    },
    securityDetails: {
      message: (params: Params) => {
        switch (params.userInput) {
          case "Encryption":
            return "We use AES-256 encryption for data at rest and TLS 1.2 for data in transit. Your documents are safe with us!";
          case "Compliance Standards":
            return "We meet legal requirements for electronic signatures, including GDPR, ESIGN, and eIDAS standards.";
          default:
            return "Please select a valid option.";
        }
      },
      path: "loop",
    },
    subscriptions: {
      message: (params: Params) =>
        "Which subscription plan would you like to know more about?",
      options: ["Basic", "Pro", "Enterprise"],
      path: "subscriptionDetails",
    },
    subscriptionDetails: {
      message: (params: Params) => {
        switch (params.userInput) {
          case "Basic":
            return "Basic includes 10 documents/month and 1 sender. Perfect for personal use!";
          case "Pro":
            return "Pro offers unlimited documents and advanced features like bulk send. Ideal for professionals!";
          case "Enterprise":
            return "Enterprise is tailored for teams and includes API access. Contact us for details!";
          default:
            return "Please select a valid option.";
        }
      },
      path: "loop",
    },
    technicalIssues: {
      message: (params: Params) =>
        "What issue are you facing? Choose from the following options:",
      options: [
        "Can't log in",
        "Error uploading document",
        "Can't send document",
      ],
      path: "issueDetails",
    },
    issueDetails: {
      message: (params: Params) => {
        switch (params.userInput) {
          case "Can't log in":
            return "Ensure your email and password are correct. Reset your password if needed by clicking 'Forgot Password'.";
          case "Error uploading document":
            return "Ensure the file is under the 10 MB limit and in PDF, DOCX, or PNG format. Still stuck? Let me know!";
          case "Can't send document":
            return "Verify recipient emails and ensure all required fields are filled. If the issue persists, contact support.";
          default:
            return "Please select a valid option.";
        }
      },
      path: "loop",
    },
  };
  