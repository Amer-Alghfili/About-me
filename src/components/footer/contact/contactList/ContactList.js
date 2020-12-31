import "./ContactList.css";
import ContactItem from "../contactItem/ContactItem";

export default function ContactList({ contacts }) {
  const renderedContacts = contacts.map(
    ({ label: { name, value }, img }, ind) => (
      <ContactItem key={ind} name={name} value={value} img={img} />
    )
  );
  return <ul className="contact-list">{renderedContacts}</ul>;
}
