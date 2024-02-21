import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex py-2 top-0 px-16 items-center justify-end bg-transparent sticky z-50 text-slate-900">
      <span className="flex gap-6 h-12 my-2 items-center">
        <form className="p-2 px-3 flex items-center h-full rounded-full gap-2 bg-white/70 hover:text-black hover:bg-white has-[:focus]:text-black has-[:focus]:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="outline-none placeholder:text-slate-900 text-black w-80 bg-transparent"
          />
        </form>
        <Link
          href={"/"}
          className="rounded-full bg-white/70 hover:bg-white hover:text-black flex items-center gap-2 px-5 h-full"
        >
          {/* <Icon name="circle_plus" size="48px" /> */}
          <span className="text-[26px]">+</span> <p>Add New</p>
        </Link>
        {/* <button className="p-2" type="button" name="toggle theme">
          <Icon name="light" size="48px" />
        </button> */}
      </span>
    </header>
  );
};

export default Header;
