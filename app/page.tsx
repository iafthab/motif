import Carousel from "./components/Carousel";
import Header from "./components/Header";

const page = async () => {
  return (
    <main className="w-full bg-gradient-to-r from-[#080011] to-[#022482] overflow-auto h-screen text-slate-300">
      <Header />
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular Movies</h2>
        <Carousel
          type="movie"
          accent="Home"
          URLPath="discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
        />
      </section>
      <section className="px-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular Series</h2>
        <Carousel
          type="series"
          accent="Home"
          URLPath="discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
        />
      </section>
    </main>
  );
};

export default page;
