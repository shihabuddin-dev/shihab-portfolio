import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import FloatingDock from "@/components/floatingDock/FloatingDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shihab-dev.web.app"),
  title: "Shihab Uddin - Full Stack Developer Portfolio",
  description:
    "A personal portfolio website for Shihab Uddin, a MERN and Full Stack Developer, showcasing projects, skills, and experience.",
  keywords: [
    "Shihab Uddin",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Frontend",
    "Backend",
    "UI/UX",
  ],
  authors: [{ name: "Shihab Uddin" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Shihab Uddin - Full Stack Developer Portfolio",
    description:
      "A personal portfolio website for Shihab Uddin, a MERN and Full Stack Developer, showcasing projects, skills, and experience.",
    url: "/",
    siteName: "Shihab Uddin Portfolio",
    images: ["/favicon.ico"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shihab Uddin - Full Stack Developer Portfolio",
    description:
      "A personal portfolio website for Shihab Uddin, a MERN and Full Stack Developer, showcasing projects, skills, and experience.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="A personal portfolio website for Shihab Uddin, a MERN and Full Stack Developer, showcasing projects, skills, and experience."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingDock />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
