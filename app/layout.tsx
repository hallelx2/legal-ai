import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Space_Grotesk } from 'next/font/google'

// Configure the font with the appropriate options
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  // You can also specify additional options like weights
  weight: ['300', '400', '500', '600', '700'],
  // For better performance, you can specify which characters to preload
  preload: true,
  // You can also adjust the display setting
  display: 'swap',
})

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
