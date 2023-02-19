import { ChangeEvent, useCallback, useContext, useState } from "react";
import styles from "./Input.module.css";
import { MicrophoneIcon } from "./svg/MicrophoneIcon";
import { SendIcon } from "./svg/SendIcon";
import { ChatContext } from "../../Contexts/ChatContext";

export const Input = () => {
  const [text, setText] = useState<string>("");

  const { sendMessage } = useContext(ChatContext);

  const sendHandler = useCallback(() => {
    if (!sendMessage) {
      return;
    }

    if (text !== "") {
      sendMessage(text);
    }
    setText("");
  }, [text, sendMessage]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Задайте ваш вопрос..."
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value ? e.target.value : "")
        }
      />

      <div className={styles.inputButton} onClick={sendHandler}>
        <SendIcon />
      </div>

      <div className={styles.inputButton}>
        <MicrophoneIcon />
      </div>
    </div>
  );
};
