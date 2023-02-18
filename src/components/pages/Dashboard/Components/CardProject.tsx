import { useEffect, useState } from "react";
import { Confluence } from "../../MainContent/Svg/Confluence";
import { Figma } from "../../MainContent/Svg/Figma";
import { GitSvg } from "../../MainContent/Svg/Git";
import { End } from "../../Projects/Svg/End";
import { Start } from "../../Projects/Svg/Start";
import styles from "./project.module.css";
export const CardProject = ({
  title,
  startDate,
  endDate,
  progress,
  lastActivity,
}: any) => {
  const [progressInfo, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setProgress(progress), 200);
  }, []);
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.dateContainer}>
        <div className={styles.date}>
          <Start /> {startDate}
        </div>
        <div className={styles.date}>
          <End /> {endDate}
        </div>
      </div>
      <div className={styles.progressBar}>
        <div
          style={{
            background: "#1EC025",
            width: `${progressInfo}%`,
            height: "100%",
            transition: "all 0.4s",
          }}
        />
      </div>
      <div className={styles.date}>
        {lastActivity}
        <span className={styles.users} />
      </div>
      <div style={{ marginTop: 16, display: "flex", gap: 4 }}>
        <GitSvg /> <Figma /> <Confluence />
      </div>
    </div>
  );
};
