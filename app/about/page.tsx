import React from "react";
import Header from "../components/Header";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="w-full bg-gold overflow-auto h-screen text-slate-300">
      <Header />
    </main>
  );
};

export default page;
