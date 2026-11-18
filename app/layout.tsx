import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menna Yasser | Junior Software Developer",
  description:
    "Portfolio of Menna Yasser, a junior software developer focused on front-end development, modern web technologies, and AI-assisted workflows.",
  keywords: [
    "Menna Yasser",
    "Junior Software Developer",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript"
  ],
  openGraph: {
    title: "Menna Yasser | Junior Software Developer",
    description: "Building thoughtful, responsive web experiences.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
