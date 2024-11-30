// components
import SkillsList from "./SkillsList";
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
      <SkillsList />
    </div>
  );
}

export default Skills;
