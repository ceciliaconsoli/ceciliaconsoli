import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { Experience } from "../../utils/type";
import styles from "./experience.module.css";

type ExperienceProps = {
  experience: Experience;
  isEdu?: boolean;
};

const Experience: FC<ExperienceProps> = ({ experience, isEdu = false }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.experienceCard}>
      <div className={styles.title}>
        {isEdu ? (
          <FaGraduationCap color="#a350a3" fontSize={"40px"} />
        ) : (
          <FaLaptopCode color="#a350a3" fontSize={"40px"} />
        )}
        <h3>{experience.title}</h3>
      </div>
      <div className={styles.details}>
        <span className={styles.dot}></span>
        <p className={`${styles.bold} ${styles.pink}`}>
          {experience.place} | {experience.years}
        </p>
        {isEdu && (
          <>
            {experience.thesis && (
              <p>
                <span className={styles.bold}>{t("aboutPage.thesis")}:</span>{" "}
                {experience.thesis}
              </p>
            )}
            {experience.result && (
              <p>
                <span className={styles.bold}>{t("aboutPage.result")}:</span>{" "}
                {experience.result}
              </p>
            )}
          </>
        )}
        <p>{t(`experience.description.${experience.id}`)}</p>
        {/* <p>{experience.description}</p> */}
      </div>
    </div>
  );
};

export default Experience;
