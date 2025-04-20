import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] , weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

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
    <html lang="en" className="min-h-screen scroll-smooth" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} min-h-screen bg-[inherit] text-[inherit] transition-colors duration-300`}>
        <ThemeProvider>
          <HeaderWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


