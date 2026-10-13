import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const btSans = localFont({
  src: "../../public/sites/afb/fonts/inter-normal-100-900-latin-4b73e2ff.woff2",
  variable: "--font-bt",
  weight: "100 900",
});

const btSerif = localFont({
  src: "../../public/sites/afb/fonts/gelasio-normal-400-700-latin-18bd9939.woff2",
  variable: "--font-bt-serif",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Automation For Business | Custom Software, Websites and AI",
  description: "Automation For Business builds operations platforms, websites and AI tools for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${btSans.variable} ${btSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
