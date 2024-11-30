import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";

function HeroSection() {
  return (
    <div className="w-full grid place-items-center">
      <h1 className="text-primary text-5xl font-bold">
        <span className="block text-center mb-5">Hi</span>
        I'm Sanaz
      </h1>
      <h3 className="my-4">Frontend Developer</h3>
      <IconButton
        text="Contact Me"
        icon={faAngleRight}
        size="sm"
        buttonStyle="flex justify-center items-center gap-2 border border-primary text-primary font-bold px-5 py-2 rounded-full"
        iconStyle="bg-primary text-white rounded-md px-2 py-1"
      />
    </div>
  );
}

export default HeroSection;
