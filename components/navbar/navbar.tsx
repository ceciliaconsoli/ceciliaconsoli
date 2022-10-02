import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [background, setBackground] = useState(false);

  const languages = [
    { code: "ita", displayName: "italiano", icon: "🇮🇹" },
    { code: "eng", displayName: "english", icon: "🇬🇧" },
  ];

  const changeLanguage = (i18n: any, language: string) => {
    window.localStorage.setItem("MY_LANGUAGE", language);
    i18n.changeLanguage(language);
  };

  //Add background to nav on scroll
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  // console.log("LANG", i18n.language);

  return (
    <nav
      id="nav"
      className={background ? `${styles.nav} ${styles.navColor}` : styles.nav}
    >
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/#portfolio">
          <a>
            <li>Portfolio</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/#contacts">
          <a>
            <li>Contacts</li>
          </a>
        </Link>
      </ul>
      <div className={styles.languagesColumn}>
        {languages.map((language) => (
          <img
            src={`/img/${language.code}.png`}
            key={language.code}
            onClick={() => changeLanguage(i18n, language.code)}
            className={styles.icon}
          />
          // <span
          //   // data-id={`${language.code}-button`}
          //   // className={i18n.language === language.code ? "active" : undefined}
          //   onClick={() => changeLanguage(i18n, language.code)}
          //   key={language.code}
          //   role="icon"
          //   aria-label="language flag"
          //   className={styles.icon}
          // >
          //   {/* {t(language.displayName)} */}
          //   {language.icon}
          // </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
