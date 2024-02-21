import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import CelebOverview from "@/app/components/CelebOverview";
import Header from "@/app/components/Header";

const SeriesDetails = async ({ params }: { params: { seriesId: string } }) => {
  const series: SeriesDetails = await fetchData(
    `/tv/${params.seriesId}?language=en-US`
  );
  const credits: SeriesCredits = await fetchData(
    `tv/${params.seriesId}/aggregate_credits`
  );

  return (
    <main className="bg-gradient-to-r from-[#070002] to-[#68001c] w-full overflow-auto h-screen text-slate-300">
      <Header />
      <section>
        <section className="p-3 select-none gap-3 grid grid-cols-3 w-full grid-rows-3">
          <div className="p-4 rounded-3xl bg-red/30 border-2 border-red-800 hover:bg-red/20 duration-200 hover:border-red-700 row-start-1 row-end-4 flex items-center overflow-hidden">
            <Image
              className="hover:scale-110 duration-500 "
              src={`${process.env.IMG_URI}${series.poster_path}`}
              alt={`${series.original_name} poster`}
              // fill={true}
              width={500}
              height={750}
              quality={100}
            />
          </div>
          <div className="p-4 w-full h-full col-start-2 col-end-4 row-end-2 row-start-1 rounded-3xl flex flex-col justify-evenly gap-2 bg-[#160303] text-white group hover:bg-black duration-500">
            <div>
              <h2 className="font-semibold group-hover:font-bold group-hover:text-gold duration-500 truncate text-5xl">
                {series.name}
              </h2>
              <p className="text-xl text-slate-300 italic">{series.tagline}</p>
            </div>
            <p className="line-clamp-3 text-[17px]">{series.overview}</p>
          </div>
          <section className="grid row-start-2 row-end-4 gap-3">
            <div className="p-4 w-full h-full col-start-1 col-end-2 truncate rounded-xl bg-gold group hover:bg-white duration-500 text-black font-bold flex flex-col items-center justify-center">
              User Rating:
              <p className="text-8xl font-bold group-hover:text-gold duration-500 text-white">
                {series.vote_average.toPrecision(2)}
              </p>
            </div>
            <div className="p-4 w-full h-full text-[15px] rounded-3xl bg-red/30 border-2 border-red-800 hover:bg-red/20 duration-200 hover:border-red-700 row-start flex flex-col justify-center">
              Status:
              <p
                className={`${
                  series.status === "Returning Series"
                    ? "text-green-600"
                    : series.status === "Canceled"
                    ? "text-red-600"
                    : ""
                } font-semibold text-2xl`}
              >
                {series.status}
              </p>
              First Air Date:
              <p className={` font-semibold text-2xl`}>
                {series.first_air_date}
              </p>
              {series.episode_run_time[0] && (
                <>
                  Runtime:
                  <p className="font-medium text-xl">
                    {series.episode_run_time} minutes
                  </p>
                </>
              )}
            </div>
            <div className="p-4 w-full h-full flex items-center justify-center flex-col rounded-3xl bg-red/30 border-2 border-red-800 hover:bg-red/20 duration-200 hover:border-red-700 col-start-1 col-end-3">
              Genres:
              {series.genres.slice(0, 3).map((genre) => (
                <p className="text-4xl font-bold" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </div>
          </section>
          <div className="p-4 w-full h-full row-start-2 row-end-4 col-start-2 col-end-3 rounded-3xl bg-red/30 border-2 border-red-800 hover:bg-red/20 duration-200 hover:border-red-700 flex flex-col justify-evenly text-center items-center">
            <div>
              Created By:
              {series.created_by.length ? (
                <>
                  {series.created_by.map((creator) => (
                    <p
                      key={creator.id}
                      className="text-3xl truncate font-semibold"
                    >
                      {creator.name}
                    </p>
                  ))}
                </>
              ) : (
                <p className="text-3xl font-semibold">-</p>
              )}
            </div>
            <div>
              Produced By:
              {series.production_companies.length ? (
                <>
                  {series.production_companies.slice(0, 3).map((producer) => (
                    <p key={producer.id} className="text-3xl font-semibold">
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
        {credits.cast.length ? (
          <section
            className={`bg-red/30 border-2 border-red-800 hover:bg-red/20 duration-200 hover:border-red-700 flex mx-3 mb-3 justify-start gap-4 items-center p-4 rounded-3xl`}
          >
            <h3 className="text-4xl font-semibold mb-4">Cast:</h3>
            <div className="flex justify-around w-full">
              {credits.cast.slice(0, 6).map((cast) => (
                <CelebOverview key={cast.id} celeb={cast} playing={true} />
              ))}
            </div>
          </section>
        ) : (
          ""
        )}
        <section
          className={`bg-red/30 border-2 border-red-800 hover:bg-red/20 duration-200 hover:border-red-700 flex mx-3 mb-3 justify-start gap-4 items-center p-4 rounded-3xl`}
        >
          <h3 className="text-4xl font-semibold mb-4">Crew:</h3>
          <div className="flex justify-around w-full">
            {credits.crew.slice(0, 6).map((cast) => (
              <CelebOverview key={credits.id} celeb={cast} job={true} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default SeriesDetails;
