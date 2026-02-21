import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portland Art Museum — Est. 1892",
  description:
    "The Portland Art Museum is the oldest and largest art museum in the Pacific Northwest, presenting world-class art at 1219 SW Park Avenue, Portland, OR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${karla.variable} min-h-screen flex flex-col bg-cream`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
