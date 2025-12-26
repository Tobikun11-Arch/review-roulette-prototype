import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Review Roulette Prototype",
  description: "A prototype for a review roulette prototype.",
  icons: {
    icon: [
      { url: "/roulette-wheel.png", type: "image/png", sizes: "32x32" }, 
      { url: "/roulette-wheel.png", type: "image/png", sizes: "192x192" }, 
    ],
    apple: "/roulette-wheel.png",
  },
  openGraph: {
    title: "Review Roulette Prototype",
    description: "A prototype for a review roulette prototype.",
    url: "https://review-roulette-prototype.vercel.app", 
    type: "website",
    images: [
      {
        url: "/review-roulette-prototype.png", 
        width: 1200,
        height: 630,
        alt: "Review Roulette Prototype Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}