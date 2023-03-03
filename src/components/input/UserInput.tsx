import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import ChatGPT from "components/openAI/ChatGPT";
import config from "config";
// import ChatGPT from "../openAI/ChatGPT";

export default function UserInput() {
  const [text, onChangeText] = useState(config.openAIApiKey);
  const c = new ChatGPT();

  return (
    <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
