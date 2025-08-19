import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import FloatingInstagram from "@/components/FloatingInstagram";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karan Bhatia | Professional Emcee & TV Presenter",
  description: "Karan Bhatia - Dubai-based professional emcee and TV presenter, renowned for dynamic stage presence and exceptional crowd engagement.",
  keywords: ["emcee", "tv presenter", "event host", "comedian", "corporate events", "weddings", "celebrity events", "dubai emcee"],
  authors: [{ name: "Karan Bhatia" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <FloatingInstagram />
        <LeadCaptureModal />
      </body>
    </html>
  );
}
