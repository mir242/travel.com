import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "travel_app",
  description: "پروژه  اولیه برای  کمپ و مسافرت ها ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Navbar/>
      
      <body>{children}</body>
    <Footer/>
    </html>
  );
}
