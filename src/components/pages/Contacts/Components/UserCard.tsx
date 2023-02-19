import { Mail } from "../Svg/Mail";
import { Phone } from "../Svg/Phone";
import { TimeLine } from "../Svg/TimeLine";
import { Tooltip } from "../Svg/Tooltip";
import styles from "./styles.module.css";

export const UserCard = ({ title, role }: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.topSide}>
        <div className={styles.image}></div>
        <div className={styles.info}>
          <div className={styles.role}>{role}</div>
          <div className={styles.name}>{title}</div>
          <div className={styles.depart}>Департамент развития молодежи</div>
          <div className={styles.tooltip}>
            <Tooltip />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 13,
          }}
        >
          <div className={styles.resources}>
            <Phone />{" "}
            <span className={styles.phoneAndMail}>+7 961 625 96 56</span>
          </div>
          <div className={styles.resources}>
            <Mail /> <span className={styles.phoneAndMail}>niki@gmail.com</span>
          </div>
        </div>
        <div className={styles.resources}>
          <TimeLine />{" "}
          <span className={styles.timeLineText}>
            Тот же часовой пояс, что и у вас
          </span>
        </div>
      </div>
    </div>
  );
};
