import React from "react";
import { IMessage } from "../Components/Message/Message";

export interface IChatContext {
  messages: IMessage[];

  initChat?: (initMessageId: number) => void;
  sendMessage?: (text: string) => void;
  messageByButton?: (newMessageId: number) => void;
}

const initialState: IChatContext = {
  messages: [],
};

export const ChatContext = React.createContext<IChatContext>(initialState);
export const ChatProvider = ChatContext.Provider;

// всё что ниже, это логика бота по сути! Хз, поч я это здесь оставил, лень было думать, куда это убирать!

export interface IInitMessage {
  id: number;
  text: string;
}

export const initMessages: IInitMessage[] = [
  {
    id: 1,
    text: "Начать",
  },
  {
    id: 6,
    text: "Заработная плата",
  },
];

interface IBotMessage {
  id: number;
  text: string;
  buttons?: boolean;
  attachments?: boolean;
}

export const botMessages: IBotMessage[] = [
  {
    id: 2,
    text: "Добрый день, Марк! Чем могу помочь?",
    buttons: true,
  },
  {
    id: 3,
    text: "Опиши свою проблему и я отвечу на нее",
  },
  {
    id: 5,
    text: "Проверит вашу работу и расскажет, что делать дальше, Алина Ветрова!",
    attachments: true,
  },
  {
    id: 7,
    text: "Текст про ЗП",
  },
];

export interface IChatScriptLinkedListItem {
  nextId: number;
  nextIsBot: boolean;
}

export const ChatScriptLinkedList: { [id: number]: IChatScriptLinkedListItem } =
  {
    1: {
      nextId: 2,
      nextIsBot: true,
    },
    2: {
      nextId: 3,
      nextIsBot: true,
    },
    3: {
      nextId: 4,
      nextIsBot: false,
    },
    4: {
      nextId: 5,
      nextIsBot: true,
    },
    5: {
      nextId: 0,
      nextIsBot: false,
    },

    6: {
      nextId: 7,
      nextIsBot: true,
    },
    7: {
      nextId: 0,
      nextIsBot: false,
    },
  };

export const getCurrentTime = () =>
  new Date().getHours() + ":" + new Date().getMinutes();

export const getNewMessages = (
  message: IInitMessage | IBotMessage | IMessage,
  messages: IMessage[]
): IMessage[] => {
  const newMessages: IMessage[] = [
    ...messages,
    {
      ...message,
      isMe: true,
      time: getCurrentTime(),
    },
  ];

  if (Object.hasOwn(ChatScriptLinkedList, message.id)) {
    const nextMessageInfo = ChatScriptLinkedList[message.id];
    if (nextMessageInfo.nextId && nextMessageInfo.nextIsBot) {
      const botMessage = botMessages.find(
        (item) => item.id === nextMessageInfo.nextId
      );

      if (botMessage) {
        return [
          ...newMessages,
          {
            ...botMessage,
            time: getCurrentTime(),
          },
        ];
      }
    }
  }

  return newMessages;
};

// id 1, nachat, user
// id 2 dobriden, bot
// id 3 opishi, bot
// id 4 probmlem, user
// id 5 contact, bot

// id 6 zarab user
// id 7 text bot
