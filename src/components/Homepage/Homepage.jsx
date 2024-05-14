import RFooter from "../Footer/RFooter";
import Header from "./Header";
import MainContent from "./MainContent";

const Homepage = () => {
  return (
    <section className="w-[77%]  max-sm:w-full max-sm:px-5 grid content-between h-screen">
      <Header />
      <MainContent />
      <RFooter />
    </section>
  );
};

export default Homepage;
