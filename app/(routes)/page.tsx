import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sadiq R.",
  description: "Welcome to my portfolio website",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      {/* Add your hero section and other content here */}
    </main>
  );
} 