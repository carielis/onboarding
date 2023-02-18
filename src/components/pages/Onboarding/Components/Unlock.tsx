import { Arrow } from "../../MainContent/Svg/Arrow";
import { End } from "../../Projects/Svg/End";
import { Start } from "../../Projects/Svg/Start";
import styles from "./unlock.module.css";
export const Unlock = () => {
  return (
    <div className={styles.card}>
      <div style={{ height: 0, transform: "skewX(-170deg)" }}>
        <div className={styles.notifDay}>
          <div className={styles.cms}>1</div>
          <div className={styles.dayTextNot}>День</div>
        </div>
      </div>
      <div className={styles.container}>
        <div style={{ paddingLeft: 12 }} className={styles.title}>
          Подача документов
        </div>
        <div className={styles.dayText}>
          <Start />
          Старт: <span style={{ color: "black" }}>16 января</span>
        </div>
        <div className={styles.dayText}>
          <End />
          Конец: <span style={{ color: "black" }}>16 января</span>
        </div>
        <div style={{ paddingLeft: 6 }} className={styles.taskToday}>
          <span style={{ fontSize: 32, color: "black" }}>4</span>
          <span>задачи на сегодня</span>
        </div>
        <div className={styles.moreInfo}>
          Подробнее <Arrow color="black" />
        </div>
      </div>
    </div>
  );
};
