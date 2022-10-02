import Card from "../components/card/card";
import styles from "../components/sections/portfolio/portfolio.module.css";
import { projects } from "../utils/projects";

const Portfolio = () => {
  return (
    <div className="container">
      <div className={styles.portfolioPage}>
        <h1>Portfolio</h1>
        <div className={styles.portfolioGrid}>
          {projects.map((p) => {
            return <Card key={p.id} project={p} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
