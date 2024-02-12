import React from "react";
import Carousel from "../components/Carousel";

const SeriesPage = () => {
  return (
    <main>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Top Rated</h2>
        <Carousel URLPath="tv/top_rated?language=en-US&page=1" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Airing Today</h2>
        <Carousel URLPath="tv/airing_today?language=en-US&page=1" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">On The Air</h2>
        <Carousel URLPath="tv/on_the_air?language=en-US&page=1" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular</h2>
        <Carousel URLPath="tv/popular?language=en-US&page=1" />
      </section>
    </main>
  );
};

export default SeriesPage;
