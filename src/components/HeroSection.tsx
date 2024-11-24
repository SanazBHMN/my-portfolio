import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="w-full grid place-items-center">
      <h1 className="text-primary text-5xl font-bold">
        <span className="block text-center mb-5">Hi</span>
        I'm Sanaz
      </h1>
      <h3 className="my-4">Frontend Developer</h3>
      <button className="flex justify-center items-center gap-2 border border-primary text-primary font-bold px-5 py-2 rounded-full">
        Contact Me
        <FontAwesomeIcon
          icon={faAngleRight}
          size="sm"
          className="bg-primary text-white rounded-md px-2 py-1"
        />
      </button>
    </div>
  );
}

export default HeroSection;
