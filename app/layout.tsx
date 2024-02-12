import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "@/lib/fonts";
import Header from "./components/Header";
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
        className={` ${primaryFont.className}  bg-gradient-to-b from-[#1f262d] to-[#14181c] w-screen h-screen flex`}
      >
        <NavBar />
        <main className="w-full overflow-auto h-screen text-slate-300">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
