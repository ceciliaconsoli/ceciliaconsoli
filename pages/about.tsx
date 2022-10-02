import { Trans, useTranslation } from "react-i18next";
import { MdFileDownload } from "react-icons/md";
import BarChart from "../components/barChart/barChart";
import buttonStyles from "../components/button/button.module.css";
import Experience from "../components/experienceCard/experience";
import styles from "../styles/About.module.css";
import { education } from "../utils/education";
import { skills } from "../utils/skills";
import { works } from "../utils/work";

type Certifications = {
  name: string;
  desc: string;
};

const About = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";

  const certifications: Certifications[] = t("certifications", {
    returnObjects: true,
  });
  
  return (
    <div className="container">
      <div id="heroAbout" className={styles.about}>
        <div className={styles.aboutText}>
          <h1>{t("aboutPage.title")}</h1>
          <p>
            {t("aboutPage.desc")} <span>junior front-end developer</span>{" "}
            {t("aboutPage.desc1")} <span>{t("uni")}</span>,{" "}
            {t("aboutPage.desc2")}.
          </p>
          <p>
            {t("aboutPage.desc3")} <span>front-end developement</span>,{" "}
            {t("aboutPage.desc4")}{" "}
            <span>UX/UI, web &amp; user-centered design</span>.
          </p>
          <p>
            {t("aboutPage.desc5")} <span>{t("aboutPage.desc6")}</span>.{" "}
            {t("aboutPage.desc7")}!
          </p>
          <a
            href="/docu/CV_cecilia_consoli.pdf"
            download
            className={`${buttonStyles.button} ${buttonStyles.primaryButton}`}
          >
            {t("cvButton")} <MdFileDownload />
          </a>
        </div>
        <img
          src="/img/cecipic_bg.png"
          className={styles.image}
          alt="My photo"
        />
      </div>
      <div id="work" className={styles.work}>
        <h1>{t("aboutPage.work")}</h1>
        {works.map((w, i) => {
          return <Experience experience={w} key={i} />;
        })}
      </div>
      <div id="education" className={styles.education}>
        <h1>{t("aboutPage.edu")}</h1>
        {education.map((e, i) => {
          return <Experience experience={e} isEdu={true} key={i} />;
        })}
      </div>
      <div id="skills" className={styles.skills}>
        <h1>Skills</h1>
        <p>
          <Trans i18nKey="experience.skills.intro" />
        </p>
        <p>{t("experience.skills.softSkills")}</p>
        <p>
          <Trans i18nKey="experience.skills.languages" />
        </p>
        <div className={styles.skillsColumns}>
          <div className={styles.developement}>
            <h2>Developement</h2>
            {skills.map((s, i) => {
              if (s.type === "dev") {
                return <BarChart key={i} skill={s} />;
              }
            })}
          </div>
          <div className={styles.design}>
            <h2>Design</h2>
            {skills.map((s, i) => {
              if (s.type === "design") {
                return <BarChart key={i} skill={s} />;
              }
            })}
          </div>
        </div>
      </div>
      <div id="certifications" className={styles.certifications}>
        <h1>{t("aboutPage.certifications")}</h1>
        <p>COMING SOON...</p>
        {/* TODO */}
        {/* {certifications.map((c, i) => {
          return (
            <div key={i}>
              <p>{c.name}</p>
              <p>{c.desc}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default About;
