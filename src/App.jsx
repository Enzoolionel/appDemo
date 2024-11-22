import DinnerCard from "./components/DinnerCard";
import NavProfile from "./components/NavProfile";
import Buttons from "./components/ButtonSection.jsx";
import ContactsSection from "./components/ContactSection.jsx";
import RecentSection from "./components/RecentSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <NavProfile />
      <DinnerCard />
      <Buttons />
      <ContactsSection />
      <RecentSection />

      <Footer />
    </>
  );
};

export default App;
