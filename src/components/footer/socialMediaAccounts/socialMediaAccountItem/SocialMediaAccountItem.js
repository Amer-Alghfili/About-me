import './SocialMediaAccountItem.css'
export default function SocialMediaAccountItem({ name, img, link }) {
  return (
    <li className="account">
      <a href={link}>
        <img className="account__img" src={img} alt={`${name} logo`} />
      </a>
    </li>
  );
}
