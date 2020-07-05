import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "./env";
import SpotifyWebApi from "spotify-web-api-node";
import { spotifyConfig } from "./env";

var spotifyApi = new SpotifyWebApi({
  clientId: spotifyConfig.clientID,
  clientSecret: spotifyConfig.clientSecret,
});

export function Chat() {
  const [messages, setMessages] = useState([]);

  const BOT_USER = {
    _id: 2,
    name: "Helper",
    avatar:
      "https://cdn.discordapp.com/attachments/622809737435676677/711452177524195328/hdt_logo.png",
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
          "Hello friend! My name is <name> and I'm here to help you! How was your day today?",
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
      let words = message.split(" ");
      let mood = words[words.indexOf("song") - 1];
      console.log(mood);
      spotifyApi.clientCredentialsGrant().then(
        function (data) {
          console.log("The access token expires in " + data.body["expires_in"]);
          console.log("The access token is " + data.body["access_token"]);

          // Save the access token so that it's used in future calls
          spotifyApi.setAccessToken(data.body["access_token"]);
        },
        function (err) {
          console.log(
            "Something went wrong when retrieving an access token",
            err
          );
        }
      );
    } else {
      Dialogflow_V2.requestQuery(
        message,
        (result) => handleGoogleResponse(result),
        (error) => console.log(error)
      );
    }
  };

  const handleGoogleResponse = (result) => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  };

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
