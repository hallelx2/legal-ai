






export interface Agreement {
    _id: string;
    createdAt:string;
    htmlContent:string;
    metadata:Metadata;
    name:string;
    updatedAt:string;
    userId: string;
    templateId: string;
    sections: Section[];
    version:string;
    signatureLocations: SignatureLocation[];
  }
  
export interface Metadata {jurisdiction: string, status: string}


export interface Section {
    sectionId: string;
    variables: SectionVariable[];
}

export interface SectionVariable {
    id: string;
    value?: string;
}

export interface SignatureLocation {
    role: string;
    email: string;
    page?: string;
    x: number;
    y: number;
    required: boolean;
}