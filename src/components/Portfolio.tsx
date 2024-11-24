// components
import HeroSection from "./HeroSection";
import About from "./About";

function Portfolio() {
  return (
    <div className="w-10/12 mx-auto flex flex-col gap-36">
      <HeroSection />
      <About />
    </div>
  );
}

export default Portfolio;
