import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://erfanansari.com"),
  title: {
    default: `${RESUME_DATA.name}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.about,
  keywords: [
    "Erfan Ansari",
    "Frontend Developer",
    "Full Stack Engineer",
    "React Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Software Engineer",
    "Web Developer",
    "Tehran",
    "عرفان انصاری",
    ...RESUME_DATA.skills,
  ],
  authors: [{ name: RESUME_DATA.name, url: "https://erfanansari.com" }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://erfanansari.com",
    title: `${RESUME_DATA.name}`,
    description: RESUME_DATA.about,
    siteName: RESUME_DATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name}`,
    description: RESUME_DATA.about,
    creator: "@erfanansarri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: RESUME_DATA.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
