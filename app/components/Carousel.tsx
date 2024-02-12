import { fetchData } from "@/lib/discover";
import Image from "next/image";

const Carousel = async ({ URLPath }: { URLPath: string }) => {
  const data: fetchedData = await fetchData(URLPath);

  return (
    <div className="flex scrollHide rounded-md overflow-x-scroll">
      {data.results.slice(0, 10).map((movie, index) => (
        <div
          key={index}
          className="flex flex-col relative mx-2 w-[350px] h-[196px]"
        >
          <div className="w-[350px] rounded-md h-[196px] relative ">
            <Image
              src={`${process.env.IMG_URI}${
                movie.backdrop_path || movie.poster_path
              }`}
              fill={true}
              className="rounded-md"
              //   width={100}
              //   height={50}
              alt={movie?.title ?? movie?.original_name}
            />
          </div>
          <div className="w-full absolute rounded-b-md bg-gradient-to-b from-slate-800/50 text-white to-slate-950 bottom-0 left-0 p-2">
            <div className="flex justify-between font-black items-center">
              <h3 className="font-semibold text-xl">
                {movie?.title || movie?.original_name}
              </h3>
              <h4 className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#ffd800"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                    clipRule="evenodd"
                  />
                </svg>

                {movie.vote_average.toString().slice(0, 3)}
              </h4>
            </div>
            <p className="text-sm text-justify">
              {movie.overview.slice(0, 90)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
