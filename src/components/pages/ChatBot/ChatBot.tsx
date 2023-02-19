import styles from "./styles.module.css";
import { EntryContent } from "./Components/EntryContent/EntryContent";
import { Chat } from "./Components/Chat/Chat";
import { useCallback, useMemo, useState } from "react";
import { IMessage } from "./Components/Message/Message";
import {
  ChatProvider,
  ChatScriptLinkedList,
  IChatContext,
  botMessages,
  getCurrentTime,
  getNewMessages,
  initMessages,
} from "./Contexts/ChatContext";

export const ChatBot = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const initChat = useCallback(
    (initMessageId: number) => {
      const initMessage = initMessages.find(
        (message) => message.id === initMessageId
      );

      if (!initMessage) {
        return;
      }

      setMessages(getNewMessages(initMessage, messages));
    },
    [messages]
  );

  const sendMessage = useCallback(
    (text: string) => {
      const lastMessage = messages[messages.length - 1];

      if (
        Object.hasOwn(ChatScriptLinkedList, lastMessage.id) &&
        ChatScriptLinkedList[lastMessage.id].nextId
      ) {
        setMessages(
          getNewMessages(
            {
              id: ChatScriptLinkedList[lastMessage.id].nextId,
              text,
            },
            messages
          )
        );
        return;
      }

      setMessages([
        ...messages,
        {
          id: lastMessage.id >= 1000 ? lastMessage.id + 1 : 1000,
          text,
          isMe: true,
          time: getCurrentTime(),
        },
      ]);
    },
    [messages]
  );

  const messageByButton = useCallback(
    (newMessageId: number) => {
      const botMessage = botMessages.find(
        (message) => message.id === newMessageId
      );

      if (!botMessage) {
        return;
      }

      setMessages([
        ...messages,
        {
          ...botMessage,
          time: getCurrentTime(),
        },
      ]);
    },
    [messages]
  );

  const chatState = useMemo<IChatContext>(
    () => ({
      messages,
      initChat,
      sendMessage,
      messageByButton,
    }),
    [messages, initChat, sendMessage, messageByButton]
  );

  return (
    <ChatProvider value={chatState}>
      <div className={styles.chatBotPage}>
        <div className={styles.chatBotBackground}>
          <div className={styles.chatBotBackgroundImage} />
        </div>
        <div className={styles.chatBotContentWrapper}>
          {messages.length ? <Chat /> : <EntryContent />}
        </div>
      </div>
    </ChatProvider>
  );
};
