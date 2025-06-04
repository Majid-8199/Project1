import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderContacts from "./components/HeaderContacts";
import LoadingWrapper from "./components/LoadingWrapper";
import FloatingContactButton from "./components/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amer & Tasheel Services UAE",
  description:
    "Hassle-free Amer & Tasheel services in UAE — visa, PRO, typing & more. Get expert help with Emirates ID, Visa Renewals, Entry Permits, Business Setup and more.",
  keywords: [
    "Amer services Dubai",
    "Tasheel center UAE",
    "Emirates ID help",
    "Visa processing UAE",
    "Dubai PRO services",
    "Business setup Dubai",
  ],
  authors: [{ name: "Amer Service Center UAE" }],
  creator: "Amer & Tasheel Services UAE",
  publisher: "Amer & Tasheel Services UAE",
  metadataBase: new URL("https://amerservice.info"),
  openGraph: {
    title: "Amer & Tasheel Services UAE",
    description:
      "Get all government-related services under one roof — Visa, Emirates ID, Typing, Medical, RTA, Dubai Police, and more.",
    url: "https://amerservice.info",
    siteName: "Amer & Tasheel Services UAE",
    locale: "en_UK",
    type: "website",
    images: [
      {
        url: "https://amerservice.info/og-image.jpg", // Replace this image if needed
        width: 1200,
        height: 630,
        alt: "Amer & Tasheel Services UAE",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingWrapper>
          <HeaderContacts />
          <Header />
          <FloatingContactButton />          <main>{children}</main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
