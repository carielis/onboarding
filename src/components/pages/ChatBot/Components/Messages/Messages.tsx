import { useContext, useEffect, useRef } from "react";
import { IMessage, Message } from "../Message/Message";
import styles from "./Messages.module.css";
import { ChatContext } from "../../Contexts/ChatContext";

export const Messages = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  const { messages } = useContext(ChatContext);

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }

    messagesRef.current.scrollIntoView({
      block: "end",
    });
  }, [messagesRef, messages]);
  return (
    <div ref={messagesRef} className={styles.messages}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
