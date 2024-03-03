import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-dosis"});
const dosis = Dosis({ subsets: ["latin"], variable: "--font-inter"});

export const metadata: Metadata = {
  title: "Meta Diária - Gerenciador de hábitos",
  description: "Gerencie seus hábitos na palma da sua mão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${inter.variable} flex justify-center items-center flex-col mt-10 bg-neutral-900`}>
        <Image src="/logo.svg" width={200} height={200} alt="Logo"/>
        {children}
        </body>
    </html>
  );
}
