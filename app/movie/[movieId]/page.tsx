import { fetchData } from "@/lib/fetchData";
import Header from "@/app/components/Header";
import Image from "next/image";
import CelebOverview from "@/app/components/CelebOverview";
import { getMovieCredits } from "@/lib/misc";

const MovieDetails = async ({ params }: { params: { movieId: string } }) => {
  const movie: MovieDetails = await fetchData(
    `/movie/${params.movieId}?language=en-US`
  );
  const credits: MovieCredits = await fetchData(
    `movie/${params.movieId}/credits`
  );
  const directors = getMovieCredits({
    crew: credits.crew,
    length: 2,
    key: "job",
    value: "Director",
  });
  const writers = getMovieCredits({
    crew: credits.crew,
    length: 2,
    key: "department",
    value: "Writing",
  });
  const producers = getMovieCredits({
    crew: credits.crew,
    length: 2,
    key: "job",
    value: "Producer",
  });

  return (
    <main className="bg-gradient-to-r from-[#00050c] to-[#004963] w-full overflow-auto h-screen text-slate-300">
      <Header />
      <section>
        <section className="p-3 select-none gap-3 grid grid-cols-3 w-full grid-rows-3">
          <div className="p-4 rounded-3xl bg-sky-950/50 border-[1.25px] border-sky-600 hover:bg-sky-950/30 duration-200 hover:border-sky-500 row-start-1 row-end-4 flex items-center overflow-hidden">
            <Image
              className="hover:scale-110 duration-500"
              src={`${process.env.IMG_URI}${movie.poster_path}`}
              alt={`${movie.name} poster`}
              // fill={true}
              width={500}
              height={750}
              quality={100}
            />
          </div>
          <div className="p-4 w-full h-full col-start-2 col-end-4 row-end-2 row-start-1 rounded-3xl flex flex-col justify-evenly gap-2 bg-[#05142b] text-white hover:bg-black group duration-500">
            <div>
              <h2 className="font-semibold group-hover:font-bold group-hover:text-gold duration-500 truncate tr text-5xl">
                {movie.title}
              </h2>
              <p className="text-xl text-slate-400 italic">{movie.tagline}</p>
            </div>
            <p className="line-clamp-3 text-[17px]">{movie.overview}</p>
          </div>
          <section className="grid row-start-2 row-end-4 gap-3">
            <div className="p-4 w-full h-full col-start-1 col-end-2 truncate rounded-xl bg-gold group hover:bg-white duration-500 text-black font-bold flex flex-col items-center justify-center">
              User Rating:
              <p className="text-8xl font-bold group-hover:text-gold duration-500 text-white">
                {movie.vote_average.toPrecision(2)}
              </p>
            </div>
            <div className="p-4 w-full h-full text-[15px] rounded-3xl bg-sky-950/50 border-[1.25px] border-sky-600 hover:bg-sky-950/30 duration-200 hover:border-sky-500 row-start flex flex-col justify-center">
              Status:
              <p
                className={`${
                  movie.status === "Released" ? "text-green-500" : ""
                } font-semibold text-2xl`}
              >
                {movie.status}
              </p>
              Release Date:
              <p className={` font-semibold text-2xl`}>{movie.release_date}</p>
              {movie.runtime && (
                <>
                  Runtime:
                  <p className="font-medium text-xl">{movie.runtime} minutes</p>
                </>
              )}
            </div>
            <div className="p-4 w-full h-full flex items-center justify-center flex-col rounded-3xl bg-sky-950/50 border-[1.25px] border-sky-600 hover:bg-sky-950/30 duration-200 hover:border-sky-500 col-start-1 col-end-3">
              Genres:
              {movie.genres.slice(0, 2).map((genre) => (
                <p className="text-4xl font-bold" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </div>
          </section>
          <div className="p-4 w-full h-full row-start-2 row-end-4 col-start-2 col-end-3 rounded-3xl bg-sky-950/50 border-[1.25px] border-sky-600 hover:bg-sky-950/30 duration-200 hover:border-sky-500 flex flex-col justify-evenly text-center items-center">
            <div>
              Directed By:
              {directors.length ? (
                <>
                  {directors.map((director) => (
                    <p
                      key={director.id}
                      className="text-3xl truncate font-semibold"
                    >
                      {director.name}
                    </p>
                  ))}
                </>
              ) : (
                <p className="text-3xl font-semibold">-</p>
              )}
            </div>
            <div>
              Written By:
              {writers.length ? (
                <>
                  {writers.map((writer) => (
                    <p
                      key={writer.id}
                      className="text-3xl truncate font-semibold"
                    >
                      {writer.name}
                    </p>
                  ))}
                </>
              ) : (
                <p className="text-3xl font-semibold">-</p>
              )}
            </div>
            <div>
              Produced By:
              {producers.length ? (
                <>
                  {producers.map((producer) => (
                    <p
                      key={producer.id}
                      className="text-3xl truncate font-semibold"
                    >
                      {producer.name}
                    </p>
                  ))}
                </>
              ) : (
                <p className="text-3xl font-semibold">-</p>
              )}
            </div>
          </div>
        </section>
        <section
          className={`bg-sky-950/50 border-[1.25px] border-sky-600 hover:bg-sky-950/30 duration-200 hover:border-sky-500 flex mx-3 mb-3 justify-start gap-4 items-center p-4 rounded-3xl`}
        >
          <h3 className="text-4xl font-semibold mb-4">Cast:</h3>
          <div className="flex justify-around w-full">
            {credits.cast.slice(0, 6).map((member) => (
              <CelebOverview
                key={credits.id}
                celeb={member}
                playing={member.character}
              />
            ))}
          </div>
        </section>
        <section
          className={`bg-sky-950/50 border-[1.25px] border-sky-600 hover:bg-sky-950/30 duration-200 hover:border-sky-500 flex mx-3 mb-3 justify-start gap-4 items-center p-4 rounded-3xl`}
        >
          <h3 className="text-4xl font-semibold mb-4">Crew:</h3>
          <div className="flex justify-around w-full">
            {credits.crew.slice(0, 6).map((member) => (
              <CelebOverview key={credits.id} celeb={member} job={member.job} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default MovieDetails;
