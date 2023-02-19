import { Input } from "../Input/Input";
import { Messages } from "../Messages/Messages";
import styles from "./Chat.module.css";

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatMessages}>
        <Messages />
      </div>
      <div className={styles.chatInput}>
        <Input />
      </div>
    </div>
  );
};
