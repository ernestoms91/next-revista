import type { Metadata } from "next";
import SessionAuthProvider from '@/app/context/SessionAuthProvider'
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({ subsets: ["latin"], weight: ["400","700"], style: "normal" });

export const metadata: Metadata = {
  title: "Revista App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
      <SessionAuthProvider>
        {children}
        </SessionAuthProvider>
      </body>

    </html>
  );
}
