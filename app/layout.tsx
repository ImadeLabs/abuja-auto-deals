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

/**
 * AVH Consult - Auto Portal Branding
 * This updates the browser tab and SEO information
 */
export const metadata: Metadata = {
  title: "Toyota Camry 2013 SE | AVH Consult Auto",
  description: "USA Direct Import - Toyota Camry 2013 SE. Cleared in Lagos, Duty Paid. Professional vehicle verification and sales by AVH Consult.",
  openGraph: {
    title: "Toyota Camry 2013 SE | AVH Consult Auto",
    description: "USA Direct Import. Cleared and ready for inspection in Lagos, Benin City, and Abuja.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}