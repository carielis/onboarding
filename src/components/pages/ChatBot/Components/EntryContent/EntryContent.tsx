import { useContext } from "react";
import { Button } from "../Button/Button";
import styles from "./EntryContent.module.css";
import { ChatContext } from "../../Contexts/ChatContext";

export const EntryContent = () => {
  const { initChat } = useContext(ChatContext);

  const startHandler = () => {
    if (!initChat) {
      return;
    }
    initChat(1);
  };

  const otherHander = () => {
    if (!initChat) {
      return;
    }
    initChat(6);
  };

  return (
    <div className={styles.entryContent}>
      <div className={styles.entryContentImage}></div>
      <div className={styles.entryContentText}>
        Привет! Я чат-бот Поплик, всегда готов помочь тебе с вопросами, которые
        могут возникнуть в процессе прохождения онбординга
      </div>
      <div>
        <Button onClick={startHandler}>Начать</Button>
      </div>
      <div className={styles.entryContentTextSeparator}>или</div>
      <div className={styles.entryContentButtons}>
        {mockButtons.map((item) => (
          <Button onClick={otherHander} key={item.text} secondary>
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

const mockButtons: Array<{ text: string; main?: boolean }> = [
  {
    text: "Заработная плата",
    main: true,
  },
  {
    text: "Отпускные",
  },
  {
    text: "Больничный",
  },
  {
    text: "Мой график",
  },
  {
    text: "ДМС",
  },
  {
    text: "Мой начальник",
  },
  {
    text: "Мой отдел",
  },
];
