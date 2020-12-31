import "./ContactItem.css";

export default function ContactItem({ name, value, img }) {
  return (
    <li className="contact">
      <img src={img} alt={`${name} logo`} className="contact__img" />
      <p className="contact__value">{value}</p>
    </li>
  );
}
