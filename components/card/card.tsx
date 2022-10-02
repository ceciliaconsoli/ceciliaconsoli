import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "../../utils/type";
import { formatArray, formatString } from "../../utils/utils";
import styles from "./card.module.css";

type CardProps = {
  project: Project;
};

const Card: FC<CardProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const langCheck = () => {
    const translation = lang === "eng" ? project.bodyEng : project.body;
    return translation || "";
  };
  return (
    <Link href={`/projects${project.path}`}>
      <div className={styles.card}>
        <Image
          src={project.img}
          width={400}
          height={260}
          objectFit="cover"
          alt={project.title}
          className={styles.image}
        />
        <h2>{project.title}</h2>
        <p>{formatString(langCheck(), 150)}</p>
        <ul>
          <li>
            <span className={styles.span}>Type</span>{" "}
            {formatArray(project.type)}
          </li>
          <li>
            <span className={styles.span}>Year</span> {project.year}
          </li>
          <li>
            <span className={styles.span}>Tools</span>{" "}
            {formatArray(project.tools)}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;
