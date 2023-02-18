import { Lock } from "./Components/Lock";
import { Unlock } from "./Components/Unlock";
import styles from "./styles.module.css";
export const Onboarding = () => {
  return (
    <div className={styles.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "2",
          padding: "24px 0px 0px 24px",
        }} /* MAIN */
        className={styles.renderTask}
      >
        <div className={styles.title}>Онбординг</div>
        <div className={styles.stepFrame}>
          <div className={styles.stepResult}>Этап 8 из 24</div>
          <div className={styles.spogressBar}>
            <div
              style={{
                background: "#1EC025",
                height: 4,
                borderRadius: 32,
                width: `${(100 / 24) * 8}%`,
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginLeft: 32,
            marginTop: 92,
            display: "flex",
            gap: 62,
            alignItems: "center",
          }}
        >
          <Unlock />
          <Lock />
          <Lock />
          <Lock />
        </div>
      </div>
      <div style={{ display: "flex", flex: "1" }}>Bottmo</div>
    </div>
  );
};
