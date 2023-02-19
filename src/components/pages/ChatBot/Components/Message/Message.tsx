import { useCallback, useContext, useMemo } from "react";
import { Button } from "../Button/Button";
import { UserAttachment } from "../UserAttachment/UserAttachment";
import styles from "./Message.module.css";
import { ChatContext } from "../../Contexts/ChatContext";

export interface IAuthor {
  isBot?: boolean;
}

export interface IMessage {
  id: number;
  text: string;
  attachments?: boolean;
  buttons?: boolean;
  isMe?: boolean;
  time: string;
}

export const Message = ({ message }: { message: IMessage }) => {
  const { messageByButton } = useContext(ChatContext);

  const buttonHandler = useCallback(() => {
    if (!messageByButton) {
      return null;
    }

    messageByButton(3);
  }, [messageByButton]);

  const classes = useMemo(
    () => [styles.message, message.isMe && styles.messageByUser].join(" "),
    [message]
  );

  return (
    <div className={classes}>
      <div className={styles.messageAvatarWrapper}>
        <div className={styles.messageAvatar} />
      </div>

      <div className={styles.messageContentWrapper}>
        <div className={styles.messageContent}>
          <div className={styles.messageText}>{message.text}</div>
          {message.attachments && <UserAttachment />}
        </div>

        {message.buttons && (
          <div className={styles.messageButtons}>
            <Button secondary onClick={buttonHandler}>
              Вопрос
            </Button>
            <Button secondary onClick={buttonHandler}>
              Проблема
            </Button>
          </div>
        )}

        <div className={styles.messageFooter}>
          {message.isMe ? "Вы" : "Поплик"} · {message.time}
        </div>
      </div>
    </div>
  );
};
