import data from "../utils/data.json";
import Skill from "./Skill";

interface SkillsListProps {}

function SkillsList({}: SkillsListProps) {
  const skills = data.skills;

  return (
    <ul className="grid grid-cols-1 gap-5 rounded-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill) => (
        <Skill key={skill.id} skillName={skill.name} skillIcon={skill.icon} />
      ))}
    </ul>
  );
}

export default SkillsList;
