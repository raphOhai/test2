import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { RootLayout as AppLayout } from "@/components/rootLayout";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salt AI - A New Economic Primitive for Funding Decentralized AI",
  description: "We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI. Join us on our mission to revolutionize open source AI development.",
  keywords: ["decentralized AI", "LLM", "open source", "artificial intelligence", "blockchain AI"],
  authors: [{ name: "Salt AI" }],
  openGraph: {
    title: "Salt AI - A New Economic Primitive for Funding Decentralized AI",
    description: "We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI.",
    url: "https://yoursite.com", // Update this with your actual domain
    siteName: "Salt AI",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Salt AI - Decentralized AI Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt AI - A New Economic Primitive for Funding Decentralized AI",
    description: "We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI.",
    images: ["/preview.webp"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
      >
        <AppLayout>
          {children}
        </AppLayout>

      </body>
    </html>
  );
}

