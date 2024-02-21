import Carousel from "../components/Carousel";
import Header from "../components/Header";

const SeriesPage = () => {
  return (
    <main className="w-full bg-gradient-to-r from-[#000705] to-[#004529] overflow-auto h-screen text-slate-300">
      <Header />
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Top Rated</h2>
        <Carousel
          type="series"
          accent="Series"
          URLPath="tv/top_rated?language=en-US&page=1"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Airing Today</h2>
        <Carousel
          type="series"
          accent="Series"
          URLPath="tv/airing_today?language=en-US&page=1"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">On The Air</h2>
        <Carousel
          type="series"
          accent="Series"
          URLPath="tv/on_the_air?language=en-US&page=1"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular</h2>
        <Carousel
          type="series"
          accent="Series"
          URLPath="tv/popular?language=en-US&page=1"
        />
      </section>
    </main>
  );
};

export default SeriesPage;
