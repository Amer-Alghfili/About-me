import SocialMediaAccountList from "./socialMediaAccounts/socialMediaAccountList/SocialMediaAccountList";
import ContactList from "./contact/contactList/ContactList"
import { accounts, contacts } from "../../util";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <SocialMediaAccountList accounts={accounts} />
      <ContactList contacts={contacts} />
    </footer>
  );
}
