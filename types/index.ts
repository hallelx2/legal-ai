export interface Agreement {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  parties: string[];
  type: string;
  content: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  agreements: Agreement[];
}
