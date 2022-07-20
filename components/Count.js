import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button 
        title="Click me" 
        onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Count;
