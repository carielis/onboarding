import { End } from "../../Projects/Svg/End";
import { Start } from "../../Projects/Svg/Start";
import styles from "./unlock.module.css";
export const Unlock = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div style={{ paddingLeft: 12 }} className={styles.title}>
          Подача документов
        </div>
        <div
          style={{
            paddingLeft: 8,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Start />
          Старт: 16 января
        </div>
        <div
          style={{
            paddingLeft: 8,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <End />
          Конец: 16 января
        </div>
        <div style={{ paddingLeft: 6 }} className={styles.taskToday}>
          <span>4</span> <span>задачи на сегодня</span>
        </div>
      </div>
    </div>
  );
};
