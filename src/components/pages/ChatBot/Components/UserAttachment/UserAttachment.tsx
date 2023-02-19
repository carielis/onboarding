import { CallIcon } from "./svg/CallIcon";
import { MailIcon } from "./svg/MailIcon";
import styles from "./UserAttachment.module.css";

export const UserAttachment = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userAvatar} />
      <div className={styles.userName}>Алина Ветрова</div>
      <div className={styles.userContacts}>
        <div className={styles.contact}>
          <CallIcon />
          <div className={styles.contactInfo}>+7 961 625 96 56</div>
        </div>
        <div className={styles.contact}>
          <MailIcon />
          <div className={styles.contactInfo}>niki@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
