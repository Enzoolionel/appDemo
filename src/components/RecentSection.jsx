/* eslint-disable react/prop-types */
import imgProfile from "../../public/16055462-ddd7-4167-a576-f2c605b507ed.jpg";

const Person = ({ img, personName, time, dinner }) => {
  return (
    <article className="flex justify-between items-center px-2">
      <div className="flex gap-2 items-center">
        <img src={img} alt="#" className="h-14 w-14 rounded-full" />
        <div>
          <h1 className="font-semibold">{personName}</h1>
          <h2>{time}</h2>
        </div>
      </div>
      <h3
        className={
          dinner[0] === "-"
            ? "text-red-500"
            : dinner[0] === "+"
            ? "text-green-500"
            : ""
        }
      >
        {dinner}
      </h3>
    </article>
  );
};

const RecentSection = () => {
  return (
    <section className="w-[90%] h-max pb-28 bg-white m-auto rounded-2xl mt-5 p-3 py-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Recent Transactions</h1>
        <h2 className="text-slate-400">See All</h2>
      </div>
      <article className="flex flex-col gap-4">
        <Person
          img={imgProfile}
          personName="Jenny Wilson"
          time="Today 12:30 PM"
          dinner="-$190"
        />
        <Person
          img={imgProfile}
          personName="Lucas Oliver"
          time="Today 09:30 AM"
          dinner="+$70"
        />
        <Person
          img={imgProfile}
          personName="Theo Avery"
          time="Today 07:45 AM"
          dinner="-$100"
        />
        <Person
          img={imgProfile}
          personName="Mateo Henry"
          time="Today 12:30 PM"
          dinner="-$200"
        />
        <Person
          img={imgProfile}
          personName="Jack Michael"
          time="Today 17:30 PM"
          dinner="-$90"
        />
        <Person
          img={imgProfile}
          personName="Junior White"
          time="Today 13:20 PM"
          dinner="+$290"
        />
      </article>
    </section>
  );
};

export default RecentSection;
