import Link from "next/link";
import Image from "next/image";
type Props = {
  celeb: PeopleOverview;
  ranking?: number;
  optionalClasses?: string;

  job?: string;
  playing?: string;
};

const CelebOverview = ({
  celeb,
  playing,
  job,
  ranking,
  optionalClasses,
}: Props) => {
  return (
    <Link
      title={celeb.name}
      href={`/people/${celeb.id}`}
      className={`${optionalClasses} h-[250px] w-[167px] group flex mx-auto text-7xl flex-col relative rounded-3xl bg-black/20`}
    >
      {ranking && (
        <p className="absolute z-10 font-bold text-gradient text-gold align-bottom left-1 drop-shadow-md">
          {ranking}
        </p>
      )}
      {celeb.profile_path ? (
        <Image
          src={`${process.env.IMG_URI}${celeb?.profile_path}`}
          fill={true}
          className="rounded-3xl"
          //   width={100}
          //   height={50}
          alt={celeb?.name}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      )}
      <div
        className={`w-full hover:bg-white duration-500 hover:text-black group-hover:bg-white group-hover:text-black absolute rounded-b-3xl ${
          !playing && !job ? "bg-[#EF9B0F] text-black" : "bg-black text-white"
        } bottom-0 left-0 p-2 px-3`}
      >
        <h3
          className={`font-semibold truncate ${
            optionalClasses ? "group-first:text-3xl" : ""
          } text-base`}
        >
          {celeb.name}
        </h3>
        {playing && (
          <p className="text-[13px] truncate align-top">
            as {playing ? playing : "Unknown"}
          </p>
        )}
        {job && (
          <p className="text-[13px] truncate align-top">
            as {job ? job : "Unknown"}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CelebOverview;
