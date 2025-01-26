import React from "react";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "./ClientLayout"; // We'll create this
import { Toaster } from "@/components/ui/toaster";

// Configure the fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <ClientLayout>
          {children}
          <Toaster />
        </ClientLayout>
      </body>
    </html>
  );
}
