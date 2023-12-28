import type { Metadata } from "next";
import Navbar from "@/app/components/ui/Navbar";
import { CustomizedFooter } from "@/app/components/ui/CustomizedFooter";


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
    <>
      <Navbar />
      {children}
      <CustomizedFooter />
    </>
  );
}
