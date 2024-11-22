import logoVisa from "../../public/visa.png";

const DinnerCard = () => {
  return (
    <main className="h-44 bg-[#345AFD] w-[90%] m-auto mt-6 rounded-3xl p-5 text-slate-200 grid grid-cols-2 grid-rows-3 shadowCard">
      <h1 className="text-4xl font-semibold">$15,780</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 relative left-28"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      <h2 className="font-semibold mt-3">****1810</h2>
      <img src={logoVisa} alt="" className="w-24 relative left-14 top-6" />
      <p className="font-semibold mt-4">10/24</p>
    </main>
  );
};

export default DinnerCard;
