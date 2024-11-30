// components
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function Portfolio() {
  return (
    <div className="flex flex-col gap-12 my-12">
      <HeroSection />
      <About />
      {/* <Skills />
      <ContactMe /> */}
    </div>
  );
}

export default Portfolio;
