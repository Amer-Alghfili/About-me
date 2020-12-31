import "../../styles/Item.css";
import "./ExperienceItem.css";

export default function ExperienceItem({ name, date, img, major }) {
  return (
    <article className="item experience">
      <div className="experience__date">
        <h1 className="experience__date--year">{date.year}</h1>
        <h2 className="experience__date--month">{date.months}</h2>
      </div>
      <div className="experience__logo--container">
        <img
          className="item__logo experience__logo"
          src={img}
          alt={`${name} logo`}
        />
      </div>
      <h2>{major}</h2>
    </article>
  );
}
