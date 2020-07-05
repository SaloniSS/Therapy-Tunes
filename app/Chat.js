import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "./env";
const axios = require("axios").default;

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    async function fetchData() {
      const token = await axios(
        `https://hackcation-ortbgm.uc.r.appspot.com/spotify-token`
      );
      setAccessToken(token.data);
    }
    fetchData();
  }, []);

  const BOT_USER = {
    _id: 2,
    name: "Pinguino",
    avatar:
      "https://cache.desktopnexus.com/thumbseg/2508/2508578-bigthumbnail.jpg",
  };

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );

    setMessages([
      {
        _id: 1,
        text:
          "Hello friend! My name is Pinguino and I'm here to help you! How was your day today?",
        createdAt: new Date(),
        user: BOT_USER,
      },
    ]);
  }, []);

  const onSend = (messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    let message = messages[0].text;

    if (message.includes("song")) {
      //get mood and do spotify stuff here
      let words = message.split(" ");
      let mood = words[words.indexOf("song") - 1];
      getSong(mood);
    } else {
      Dialogflow_V2.requestQuery(
        message,
        (result) => handleGoogleResponse(result),
        (error) => console.log(error)
      );
    }
  };

  const getSong = (mood) => {
    console.log("Mood", mood);
    console.log("Access Token", accessToken);
  };

  const handleGoogleResponse = (result) => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    wait(1000).then(() => sendBotResponse(text));
  };

  function wait(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  const sendBotResponse = (text) => {
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [msg])
    );
  };

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
