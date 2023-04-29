import React, { useEffect, useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { Button, StyleSheet, Text, View } from "react-native";

const TourScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState<string>("error");
  const [apiResponse, setApiResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  console.log("go", process.env.GOOGLE_API_KEY)

  const apiKey = process.env.OPENAI_API_KEY;
  const organization = process.env.OPENAI_ORGANIZATION;
  const configuration = new Configuration({
    organization,
    apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async () => {
    const endpointURL =
      "https://api.openai.com/v1/engines/text-davinci-002/completions";
    try {
      const response = await axios.post(
        endpointURL,
        {
          prompt:
            'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:',
          temperature: 0.5,
          max_tokens: 1024,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }

    setApiResponse("Something is going wrong, Please try again.");
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LUCAS 123</Text>
      <Text style={styles.text}>{apiResponse}</Text>
      <Button title="Submit" onPress={handleSubmit} />
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
