import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./components/Logo"
import styles from "./components/stySheet";
import TextInputExample from "./components/TextInputExample";
import Cat from "./components/Cat";
import Cafe from "./components/Cafe";

const App = () => {
  return (
    <View>
      {/* <Text style={[styles.title]}>React Native</Text> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
      <Logo/>
    </View>
  );
};

export default App;
