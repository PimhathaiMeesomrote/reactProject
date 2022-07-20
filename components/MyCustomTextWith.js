import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";

const MyFriend = ({ fName, lname }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>
        Your First Name is {fName}! and Last name is {lname}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <View style={{ flex:1,justifyContent: "center", alignItems: "center" }}>
      <MyFriend fName="Pimhathai" lname="Meesomrote" />
      <MyFriend fName="Wiphawan" lname="Piapramong" />
    </View>
  );
};

export default MyCustomTextWith;
