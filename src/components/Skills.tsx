// components
import Title from "./Title";
import {
  HTML,
  CSS,
  JavaScript,
  ReactLight,
  VueJSLight,
  MaterialUILight,
  Bootstrap,
  TailwindCSSLight,
  NextJSLight,
  GithubLight,
} from "@fdorantesm/react-skill-icons";

function Skills() {
  return (
    <div>
      <Title text="My Skills" />
      <div className="grid grid-cols-3 gap-5 rounded-md">
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <HTML className="w-11 h-11" />
          <p>HTML</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <CSS className="w-11 h-11" />
          <p>CSS</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <JavaScript className="w-11 h-11" />
          <p>JavaScript</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <ReactLight className="w-11 h-11" />
          <p>React</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <VueJSLight className="w-11 h-11" />
          <p>Vue</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <MaterialUILight className="w-11 h-11" />
          <p>MUI</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <Bootstrap className="w-11 h-11" />
          <p>Bootstrap</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <TailwindCSSLight className="w-11 h-11" />
          <p>Tailwind</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <NextJSLight className="w-11 h-11" />
          <p>Next.js</p>
        </div>
        <div className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
          <GithubLight className="w-11 h-11" />
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
