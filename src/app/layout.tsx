import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yayasan Islam Cakrawala | Menumbuhkan Generasi Berilmu, Berkarakter & Berdaya",
  description:
    "Yayasan Islam Cakrawala mengelola SDIT Cakrawala, SMP IT Cakrawala, dan SMA IT Cakrawala. Ekosistem pendidikan Islam modern terpadu di Depok, Jawa Barat.",
  keywords: [
    "Yayasan Islam Cakrawala",
    "SDIT Cakrawala",
    "SMP IT Cakrawala",
    "SMA IT Cakrawala",
    "PPDB 2026/2027",
    "Sekolah Islam Terpadu Depok",
    "Pendidikan Islam Modern",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf9f5] text-[#1e293b] selection:bg-[#c5a059] selection:text-white">
        {children}
      </body>
    </html>
  );
}
