import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Thanh Phuong | Daniel - IT / Technology Professional",
  description:
    "Portfolio of Le Thanh Phuong (Daniel), an IT / technology professional in Da Nang, Vietnam with hands-on full-stack development, systems, database, and deployment experience.",
  authors: [{ name: "Le Thanh Phuong" }],
  keywords: [
    "Le Thanh Phuong",
    "Daniel",
    "IT / Technology Professional",
    "Full-Stack Web Developer",
    "Spring Boot",
    "ASP.NET MVC",
    "SQL Server",
    "WordPress",
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
