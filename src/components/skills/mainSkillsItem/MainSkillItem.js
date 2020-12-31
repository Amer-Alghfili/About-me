import SkillItem from "../skillItem/SkillItem";
import './MainSkillItem.css'

export default function ({ type, skills }) {
  const renderedSkills = skills.map(({ name, img }, ind) => {
    return <SkillItem key={ind} name={name} img={img} />;
  });
  return (
    <>
      <h1 className="skills__title">{type}</h1>
      <ul className="skill-list">{renderedSkills}</ul>
    </>
  );
}
