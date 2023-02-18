import { Mail } from "../../Contacts/Svg/Mail";
import { Phone } from "../../Contacts/Svg/Phone";
import styles from "./styles.module.css";
export const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.userPic} />
      </div>
      <div>
        <div className={styles.nameUser}>Никита Смагин</div>
        <div style={{ display: "flex", marginTop: 8, gap: 8 }}>
          <div className={styles.phoneMail}>
            <Phone />
            +7 961 625 96 56
          </div>
          <div className={styles.phoneMail}>
            <Mail />
            niki@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};
