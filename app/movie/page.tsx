import React from "react";
import Carousel from "../components/Carousel";
import Header from "@/app/components/Header";

const MoviePage = () => {
  return (
    <main className="bg-gradient-to-r from-[#06000b] to-[#46006f] w-full overflow-auto h-screen text-slate-300">
      <Header />
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Now Playing</h2>
        <Carousel
          type="movie"
          accent="Movies"
          URLPath="movie/now_playing?language=en-US&page=1"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular</h2>
        <Carousel
          type="movie"
          accent="Movies"
          URLPath="/movie/popular?language=en-US&page=1"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Top Rated</h2>
        <Carousel
          type="movie"
          accent="Movies"
          URLPath="movie/top_rated?language=en-US&page=1"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Upcoming</h2>
        <Carousel
          type="movie"
          accent="Movies"
          URLPath="movie/upcoming?language=en-US&page=1"
        />
      </section>
    </main>
  );
};

export default MoviePage;
