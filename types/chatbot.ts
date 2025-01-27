export interface ChatMessage {
    content: string;
    type: 'user' | 'bot';
    timestamp: Date;
  }

  export interface AgreementType {
    id: string;
    name: string;
    description: string;
    prompt: string;
  }
