import React, { useState } from "react";
import axios from "axios";
import { TextInput, FlatList, StyleSheet, Text, View } from "react-native";

const TourScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { text: "Hello, I'm your tour guide. How can I help you?", sender: "bot" },
  ]);

  const apiKey = process.env.OPENAI_API_KEY;
  const organization = process.env.OPENAI_ORGANIZATION;

  const sendMessage = async (inputMessage: string) => {
    const response = await axios.post(
      // "https://api.openai.com/v1/engines/davinci-codex/completions",
      "https://api.openai.com/v1/chat/completions",
      {
        prompt: inputMessage,
        max_tokens: 60,
        n: 1,
        stop: ["\n"],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const message = response.data.choices[0].text.trim();
    setMessages([...messages, { text: message, sender: "bot" }]);
  };

  const sendUserMessage = (text) => {
    setMessages([...messages, { text: text, sender: "user" }]);
    sendMessage(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: item.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Text
                style={{
                  backgroundColor:
                    item.sender === "user" ? "#E5E5EA" : "#7A7AFF",
                  color: item.sender === "user" ? "#000" : "#FFF",
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {item.text}
              </Text>
            </View>
          )}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#7A7AFF",
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          placeholder="Type your message here"
          onSubmitEditing={(event) => sendUserMessage(event.nativeEvent.text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default TourScreen;
