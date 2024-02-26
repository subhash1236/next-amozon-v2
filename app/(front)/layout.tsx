import { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Amozon V2",
  description: "Modern Ecommerce website",
};

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main className="flex-grow container mx-auto px-4">
    {children}
   </main>
  );
}
