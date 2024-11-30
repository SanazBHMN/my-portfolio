// components
import DownloadButton from "./DownloadButton";
import Image from "./Image";

function About() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:grid-rows-[280px] sm:gap-10 p-5 rounded-xl bg-purple-300">
      <Image style="sm:order-1" />
      <div className="flex flex-col justify-between gap-8 sm:gap-0">
        <p>
          Detail-orientend, self-motivated and self-deciplined frontend
          developer with 3+ years of experience building and maintaining web
          applications. Proven ability to architect and develop user-friendly
          applications using HTML, CSS, JavaScript and React. Expertise in
          translating design specifications into clean and maintainable code.
        </p>
        <DownloadButton />
      </div>
    </div>
  );
}

export default About;
