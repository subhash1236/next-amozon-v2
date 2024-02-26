import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Amozon V2",
  description: "Modern Ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" min-h-screen flex flex-col">
          <Header/>
        {children}
        <footer className="footer footer-center gap-4 bg-base-300 text-base-content">
          <p>Copyright @ 2024 - All right reseverd by Next Amozon V2</p>

        </footer>
        </div>
        
        </body>
    </html>
  );
}
