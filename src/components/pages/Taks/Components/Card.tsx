import styles from "./card.module.css";
import { Poplic } from "./Poplic";
export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.number}>14</div>
        <div className={styles.description}>
          задач <span style={{ color: "#787878" }}>+2 на этой неделе</span>
        </div>
      </div>
    </div>
  );
};

export const CardReadyTask = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.loader}></div>
        <div className={styles.description}>Готово задач</div>
      </div>
    </div>
  );
};

export const CardCompleteTask = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content1}>
        <div className={styles.number}>14</div>
        <div className={styles.description}>
          выполнено <span style={{ color: "#787878" }}>+2 на неделе</span>
        </div>
      </div>
    </div>
  );
};
export const CardWithHelper = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <Poplic />
        </div>
        <div
          className={styles.description}
          style={{
            width: "154px",
            height: "45px",
            fontSize: "11px",
            lineHeight: "15px",
            marginBottom: "9px",
          }}
        >
          Если у тебя есть вопросы, всегда можешь написать куратору!
        </div>
      </div>
    </div>
  );
};
