import { ThemeProvider } from "@/providers/ThemeProvider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../providers/StoreProvider";

const workSans = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-work-sans",
  weight: "500",
});

const interTight = localFont({
  src: "./fonts/InterTight.ttf",
  variable: "--font-inter-tight",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Fihary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className} ${interTight.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
