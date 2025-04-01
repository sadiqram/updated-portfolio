import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Sadiq R.",
  description: "Sadiq's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
