import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Logo from "@/public/favicon.ico";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="w-full bg-gold overflow-auto h-screen text-slate-300">
      <Header />
      {/* <Image
        src={Logo}
        className="m-36 -rotate-12"
        alt="logo"
        width={50}
        height={50}
      /> */}
    </main>
  );
};

export default page;
