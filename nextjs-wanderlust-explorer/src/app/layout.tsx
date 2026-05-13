import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MainNav } from "@/components/MainNav";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Discover and book unforgettable global experiences.",
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
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <FavoritesProvider>
          <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <Link href="/" className="text-lg font-semibold tracking-tight text-teal-700">
                Wanderlust Explorer
              </Link>
              <MainNav />
            </div>
          </header>
          <div className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
