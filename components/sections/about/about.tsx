import { useTranslation } from "react-i18next";
import { TiArrowRightThick } from "react-icons/ti";
import Button from "../../button/button";
import styles from "./about.module.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.about}>
      <div className={styles.columns}>
        <div className={styles.leftColumn}>
          <h1>About</h1>
          <p>{t("about")}</p>
          <div className={styles.buttonsDiv}>
            <Button
              text={t("aboutButtons.more")}
              type="primary"
              icon={<TiArrowRightThick />}
              href="/about/"
            />
            <Button
              text={t("aboutButtons.work")}
              type="secondary"
              href="/about/#work"
            />
            <Button
              text={t("aboutButtons.edu")}
              type="secondary"
              href="/about/#education"
            />
            <Button text="Skills" type="secondary" href="/about/#skills" />
            <Button
              text={t("aboutButtons.certification")}
              type="secondary"
              href="/about/#certifications"
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <img src="/img/cecipic.png" className={styles.image} alt="My photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
