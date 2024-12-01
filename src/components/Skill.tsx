interface SkillProps {
  skillName: string;
  skillIcon?: string;
}

function Skill({ skillName, skillIcon }: SkillProps) {
  return (
    <li className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
      <img src={`https://skillicons.dev/icons?i=${skillIcon}`} alt="" />
      <p>{skillName}</p>
    </li>
  );
}

export default Skill;
