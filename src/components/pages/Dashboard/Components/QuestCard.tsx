import { Point } from "../Point";
import styles from "./quest.module.css";
export const QuestCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Прийти в офис</div>
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <div>
          <Point />
        </div>
        <div className={styles.description}>
          Коворкинг GrowUp, Большой Сампсониевский пр., 61, 2 этаж
        </div>
      </div>
    </div>
  );
};
