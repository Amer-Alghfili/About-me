import SocialMediaAccountItem from "../socialMediaAccountItem/SocialMediaAccountItem";
import "./SocialMediaAccountList.css";
export default function SocialMediaAccountList({ accounts }) {
  const renderedAccounts = accounts.map(({ name, img, link }, ind) => (
    <SocialMediaAccountItem key={ind} name={name} img={img} link={link} />
  ));
  return (
    <nav className="accounts-nav">
      <ul className="accounts">{renderedAccounts}</ul>
    </nav>
  );
}
