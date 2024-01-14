import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import Colors from "../Utils/Colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { getCourseList } from "../services";
import CourseList from "../Components/HomeScreen/CourseList";
import CourseProgressBar from "../Components/HomeScreen/CourseProgressBar";

const HomeScreen = () => {
  return (
    <View>
      <StatusBar style={{ backgroundColor: Colors.PRIMARY }} />
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: hp(30),
          padding: hp(2),
        }}
      >
        <Header />
      </View>
      <View style={{ paddingLeft: 20, paddingTop: 20 }}>
        <View style={{ marginTop: -90 }}>
          <CourseProgressBar />
          <CourseList level={"Basic"} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
