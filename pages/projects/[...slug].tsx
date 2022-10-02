import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Details.module.css";
import { projects } from "../../utils/projects";
import { Project } from "../../utils/type";
import { formatArray } from "../../utils/utils";

type ProjectDetailsProps = {
  project: Project;
};

const Project: FC<ProjectDetailsProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div>
      <div className={styles.heroDetails}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>{project?.title || ""}</h1>
          <ul>
            <li>
              <span className={styles.span}>Type</span>{" "}
              {formatArray(project?.type || "")}
            </li>
            <li>
              <span className={styles.span}>Year</span> {project?.year || ""}
            </li>
            <li>
              <span className={styles.span}>Tools</span>
              {formatArray(project?.tools || "")}
            </li>
          </ul>
          <p>{(lang === "eng" ? project?.bodyEng : project?.body) || ""}</p>
        </div>
        <img src={project?.img || ""} className={styles.image} />
      </div>

      <div className={styles.container}>
        <div className={styles.details}>
          {/* <h1>{project.title}</h1> */}
          {/* <p>{lang === "eng" ? project.bodyEng : project.body}</p> */}
          {/* TODO */}
          <p>MORE DETAILS COMING SOON...</p>
        </div>
      </div>
    </div>
  );
};

export default Project;

export async function getStaticPaths() {
  const paths = projects.map((page) => {
    const slug = page.path.split("/").slice(1);
    const id = page.id;
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const currentPath = `/${params.slug.join("/")}`;
  const project: any = projects.find((page) => page.path === currentPath);
  return { props: { project } };
}
