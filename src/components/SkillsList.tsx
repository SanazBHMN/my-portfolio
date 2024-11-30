import data from "../utils/data.json";
import Skill from "./Skill";

interface SkillsListProps {}

function SkillsList({}: SkillsListProps) {
  const skills = data.skills;

  return (
    <ul className="grid grid-cols-2 gap-5 rounded-md sm:grid-cols-3">
      {skills.map((skill) => (
        <Skill key={skill.id} skillName={skill.name} />
      ))}
    </ul>
  );
}

export default SkillsList;
