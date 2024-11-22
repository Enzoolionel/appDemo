/* eslint-disable react/prop-types */
import imgProfile from "../../public/16055462-ddd7-4167-a576-f2c605b507ed.jpg";

const Contacto = ({ img, text }) => {
  return (
    <button className="">
      <img src={img} alt="#" className="h-[52px] w-[52px] rounded-full" />
      <p className="font-semibold mt-1">{text}</p>
    </button>
  );
};

const ContactsSection = () => {
  return (
    <section className="w-[90%] bg-white py-5 px-3 m-auto rounded-2xl">
      <div className="flex justify-between">
        <h1 className="font-bold">Send Again</h1>
        <h2 className="text-slate-400">See All</h2>
      </div>
      <div className=" flex items-center justify-center gap-7 mt-4">
        <Contacto img={imgProfile} text="Robert" />
        <Contacto img={imgProfile} text="Russ" />
        <Contacto img={imgProfile} text="Kyle" />
        <Contacto img={imgProfile} text="Mike" />
      </div>
    </section>
  );
};

export default ContactsSection;
