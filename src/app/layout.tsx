import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Thanh Phuong | Daniel - Full-Stack Web Developer",
  description:
    "Portfolio of Le Thanh Phuong (Daniel), a full-stack web developer, WordPress developer, IT support engineer, and web system developer in Da Nang, Vietnam.",
  authors: [{ name: "Le Thanh Phuong" }],
  keywords: [
    "Le Thanh Phuong",
    "Daniel",
    "Full-Stack Web Developer",
    "WordPress Developer",
    "IT Support",
    "Frontend Game Developer",
    "HTML5 Playable Ads",
    "Phaser 3",
    "Da Nang",
    "Next.js Portfolio",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
