import Carousel from "./components/Carousel";

const page = async () => {
  return (
    <main>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular Movies</h2>
        <Carousel URLPath="discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc" />
      </section>
      <section className="p-4">
        <h2 className="font-bold text-4xl text-white py-4">Popular Series</h2>
        <Carousel URLPath="discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc" />
      </section>
    </main>
  );
};

export default page;
