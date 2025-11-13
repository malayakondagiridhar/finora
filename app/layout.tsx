import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Finora",
  description: "Finora - Smarter Money, Simplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    
    <html lang="en">
      <body
        className={`${inter.className}`}>
        {/* header */}
        <Header></Header>

        <main className="min-h-screen">
          
        {children}
        </main>
        {/* footer */}
        <footer className="bg-blue-50">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by GiriVicky@20</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
