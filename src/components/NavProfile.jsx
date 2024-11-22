import imgProfile from "../../public/16055462-ddd7-4167-a576-f2c605b507ed.jpg";
const NavProfile = () => {
  return (
    <header className=" flex justify-between p-3 sticky top-0 z-10 bg-[#f3f6ff]">
      <img src={imgProfile} alt="#" className="h-14 w-14 rounded-full" />
      <div className="relative right-12 top-2">
        <h2 className=" text-slate-400">Welcome Back!</h2>
        <h1 className="font-semibold text-slate-400">Jonathan Cuody</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 mt-4 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>
    </header>
  );
};

export default NavProfile;
