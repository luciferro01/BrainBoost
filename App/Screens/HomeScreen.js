import { View, Text } from "react-native";
import React from "react";
import { Header } from "../Components/HomeScreen/Header.js";
import { Hello } from "../Components/HomeScreen/Hello";

const HomeScreen = () => {
  return (
    <View>
      {/* <Header /> */}
      <Hello />
    </View>
  );
};

export default HomeScreen;
