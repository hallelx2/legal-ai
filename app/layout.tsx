import React from "react";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "./ClientLayout"; // We'll create this
import { Toaster } from "@/components/ui/toaster";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  display: "swap",
});

export const metadata = {
  title: "LegalAI - AI-Powered Agreement Generation and Signing",
  description:
    "LegalAI simplifies legal workflows by enabling businesses and practitioners to create, manage, and sign agreements seamlessly. Powered by AI and integrated with DocuSign, LegalAI ensures efficiency and professionalism.",
  keywords: [
    "LegalAI",
    "AI agreement generation",
    "DocuSign integration",
    "legal document automation",
    "agreement signing platform",
    "contract management",
    "small business agreements",
    "legal technology",
  ],
  author: "Legal AI",
  robots: "index, follow",
  openGraph: {
    title: "LegalAI - AI-Powered Agreement Generation and Signing",
    description:
      "Streamline your legal workflows with LegalAI. Create, preview, and send agreements for signature with AI-powered tools and seamless DocuSign integration.",
    url: "https://legal-ai-2zmi.onrender.com",
    type: "website",
    images: [
      {
        url: "https://drive.google.com/file/d/1C0qEYxl4l3npcL2wS-qQ8UNVhQp1Loq_/view?usp=drive_link",
        alt: "LegalAI Platform Screenshot",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.className}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta
          property="og:title"
          content={metadata.openGraph.title}
        />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {metadata.openGraph.images.map((image, index) => (
          <meta
            key={index}
            property="og:image"
            content={image.url}
          />
        ))}
      </head>
      <body>
        <ClientLayout>
          {children}
          <Toaster />
        </ClientLayout>
      </body>
    </html>
  );
}
