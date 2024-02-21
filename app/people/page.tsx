import { fetchData } from "@/lib/fetchData";
import React from "react";
import Header from "../components/Header";
import CelebOverview from "../components/CelebOverview";

const PeoplePage = async () => {
  const data: FetchedPeopleData = await fetchData(
    "person/popular?language=en-US&page=1"
  );
  return (
    <main className="bg-gradient-to-r from-[#080500] to-[#7b5000] w-full overflow-auto h-screen text-slate-300">
      <Header />
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular Celebs</h2>
        <section className="grid grid-cols-6 gap-y-8 p-4 justify-center">
          {data.results.map((celeb, index) => (
            <CelebOverview
              celeb={celeb}
              key={index}
              playing={false}
              ranking={index + 1}
              optionalClasses="first:row-span-2 first:col-span-2 first:w-[350px] first:h-full first:text-[10rem]"
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default PeoplePage;
