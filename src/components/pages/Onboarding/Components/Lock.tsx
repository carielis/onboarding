import styles from "./lock.module.css";
import { LockSvg } from "./LockSvg";

export const Lock = () => {
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
          Заголовок
        </div>
        <div className={styles.lockPos}>
          <LockSvg />
        </div>
      </div>
    </div>
  );
};
