import { FC } from "react";
import { Skills } from "../../utils/type";
import styles from "./barChart.module.css";

type BarChartProps = {
  skill: Skills;
};

const BarChart: FC<BarChartProps> = ({ skill }) => {
  return (
    <div className={styles.barChart}>
      <p className={styles.barP}>{skill.name}</p>
      <div className={`${styles.bar} ${styles.backBar}`}>
        <div
          className={`${styles.bar} ${styles.percBar}`}
          style={{ width: `${skill.perc}%` }}
        />
      </div>
    </div>
  );
};

export default BarChart;
