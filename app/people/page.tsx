import { fetchData } from "@/lib/discover";
import Image from "next/image";
import React from "react";

const PeoplePage = async () => {
  const data: fetchedData = await fetchData(
    "person/popular?language=en-US&page=1"
  );
  return (
    <main className="p-4">
      <h2 className="font-bold text-4xl text-white py-4">Popular Celebs</h2>
      <section className="grid grid-cols-6 gap-4">
        {data.results.map((celeb, index) => (
          <div
            key={index}
            className="h-[250px] w-[167px] flex flex-col relative rounded-md"
          >
            <Image
              src={`${process.env.IMG_URI}${celeb.profile_path}`}
              fill={true}
              className="rounded-md"
              //   width={100}
              //   height={50}
              alt={celeb?.name}
            />
            <div className="w-full absolute rounded-b-md bg-gradient-to-b from-slate-800/50 text-white to-slate-950 bottom-0 left-0 p-2">
              <h3 className="font-semibold text-md">{celeb.name}</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PeoplePage;
