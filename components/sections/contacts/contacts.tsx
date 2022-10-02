import { useTranslation } from "react-i18next";
import {
  FaBehance,
  FaCodepen,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../button/button";
import styles from "./contacts.module.css";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.contacts}>
      <h1>Get in touch!</h1>
      <div className={styles.buttonsDiv}>
        <Button
          href="mailto:ceciliaconsoli94@gmail.com"
          type="contacts"
          text={t("email")}
          icon={<FaEnvelope />}
        />
        <Button
          href="https://www.linkedin.com/in/cecilia-consoli/"
          type="contacts"
          text="Linkedin"
          icon={<FaLinkedin />}
        />
        <Button
          href="https://twitter.com/ccecilia__"
          type="contacts"
          text="Twitter"
          icon={<FaTwitter />}
        />
        <Button
          href="https://www.behance.net/ceciliaconsoli"
          type="contacts"
          text="Behance"
          icon={<FaBehance />}
        />
        <Button
          href="https://codepen.io/ccecilia"
          type="contacts"
          text="Codepen"
          icon={<FaCodepen />}
        />
      </div>
    </div>
  );
};

export default Contacts;
