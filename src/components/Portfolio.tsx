// components
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function Portfolio() {
  return (
    <div className="w-10/12 mx-auto flex flex-col gap-36">
      <HeroSection />
      <About />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default Portfolio;
