import { useTranslation } from "react-i18next";
import { TiArrowRightThick } from "react-icons/ti";
import { projects } from "../../../utils/projects";
import Button from "../../button/button";
import Card from "../../card/card";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <p>{t("portfolio")}</p>
      <div className={styles.portfolioGrid}>
        {projects.map((p) => {
          return p.best && <Card key={p.id} project={p} />;
        })}
        <div style={{ alignSelf: "center", justifySelf: "center" }}>
          <Button
            text={t("allProjects")}
            type={"primary"}
            href={"/portfolio"}
            icon={<TiArrowRightThick />}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
