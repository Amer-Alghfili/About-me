import "../../../styles/Item.css";
import "./ProjectItem.css";
export default function ProjectItem({ name, description, img }) {
  return (
    <article className="item">
      <img className="item__logo" src={img} alt={`${name} logo`} />
      <h1 className="project__title">{name}</h1>
      <p>{description}</p>
    </article>
  );
}
