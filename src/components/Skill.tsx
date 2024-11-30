interface SkillProps {
  skillName: string;
  skillIcon?: SVGSVGElement;
}

function Skill({ skillName, skillIcon }: SkillProps) {
  return (
    <li className="flex justify-start items-center gap-3 bg-purple-200 p-5 rounded-md">
      {/* TODO: Icons must be displayed */}
      {/* <HTML className="w-11 h-11" /> */}
      <p>{skillName}</p>
    </li>
  );
}

export default Skill;
