import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import styles from "./components/stySheet";
import TextInputExample from "./components/TextInputExample";
import Cat from "./components/Cat";
import Cafe from "./components/Cafe";

const App = () => {

  const showData =()=>{
    alert("Hello Button")
  }


  return (
    <View>
      <Text>Hello, react native!</Text>
      {/* <Text style={[styles.title]}>React Native</Text> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
      <Logo />
      <Button 
      onPress={showData}
      title="Click me" 
      />
    </View>
  );
};

export default App;
