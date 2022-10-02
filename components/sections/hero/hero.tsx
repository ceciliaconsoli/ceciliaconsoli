import { useTranslation } from "react-i18next";
import Button from "../../button/button";
import styles from "./hero.module.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id="hero" className={styles.hero}>
      <h1>
        {t("hero.hello")},<br></br>
        {t("hero.me")} <span className={styles.span}>Cecilia Consoli</span>
      </h1>
      <p id="heroText">
        Junior{" "}
        <span className={`${styles.span} ${styles.pink}`}>
          front-end developer
        </span>{" "}
        {t("hero.subtitle")}{" "}
        <span className={`${styles.span} ${styles.pink}`}>UX/UI design</span>
      </p>
      <div className={styles.buttonsDiv}>
        <Button text="Portfolio" type="primary" href="#portfolio" />
        <Button text="About" type="secondary" href="/about" />
      </div>
    </div>
  );
};

export default Hero;
