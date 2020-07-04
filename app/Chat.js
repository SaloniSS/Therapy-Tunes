import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text:
          "Hello friend! My name is <name> and I'm here to help you! How was your day today?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Helper",
          avatar:
            "https://cdn.discordapp.com/attachments/622809737435676677/711452177524195328/hdt_logo.png",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        name: "User",
        avatar:
          "https://cdn.discordapp.com/attachments/622809737435676677/711451782307381289/hdt_logo.png",
      }}
    />
  );
}
