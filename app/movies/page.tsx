import React from "react";
import Carousel from "../components/Carousel";

const MoviePage = () => {
  return (
    <main>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Now Playing</h2>
        <Carousel URLPath="movie/now_playing?language=en-US&page=1" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular</h2>
        <Carousel URLPath="/movie/popular?language=en-US&page=1" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Top Rated</h2>
        <Carousel URLPath="movie/top_rated?language=en-US&page=1" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Upcoming</h2>
        <Carousel URLPath="movie/upcoming?language=en-US&page=1" />
      </section>
    </main>
  );
};

export default MoviePage;
