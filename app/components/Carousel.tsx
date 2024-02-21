import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/lib/fonts";

const Carousel = async ({
  URLPath,
  accent,
  type,
}: {
  URLPath: string;
  accent: "Home" | "Movies" | "Series";
  type: "movie" | "series";
}) => {
  const data: FetchedMovieData = await fetchData(URLPath);

  return (
    <div className={`flex scrollHide pb-4  rounded-3xl overflow-x-scroll `}>
      {data.results.slice(0, 10).map((movie, index) => (
        <Link
          href={`/${type}/${movie.id.toString()}/`}
          key={index}
          className="flex flex-col relative mx-[6px] w-[350px] h-[270px]"
        >
          <div className="w-[350px] rounded-t-3xl h-[196px] peer relative ">
            <Image
              src={`${process.env.IMG_URI}${
                movie.backdrop_path || movie.poster_path
              }`}
              fill={true}
              className="rounded-t-3xl"
              //   width={100}
              //   height={50}
              alt={movie?.title ?? movie?.original_name}
            />
          </div>
          <div
            className={`w-full h-[80-px] duration-300 peer-hover:bg-white rounded-b-3xl text-white hover:bg-white ${
              accent === "Home"
                ? "bg-accentHome"
                : accent === "Series"
                ? "bg-accentSeries"
                : "bg-accentMovies"
            } z-10  hover:text-black peer-hover:text-black left-0  bottom-0 absolute p-2 px-2  `}
          >
            <div className="flex justify-between font-black items-center">
              <h3 className="font-semibold truncate text-xl">
                {movie?.title || movie?.name}
              </h3>
              <h4 className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fda505"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="font-medium">
                  {movie.vote_average.toString().slice(0, 3)}
                </p>
              </h4>
            </div>
            <p className="text-[13px] px-1 font-medium line-clamp-2">
              {movie.overview ? movie.overview : "No Description Found"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
