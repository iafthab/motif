import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "@/lib/fonts";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "MOTIF",
  description: "A TMDB Redesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.className} bg-white flex w-screen h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
