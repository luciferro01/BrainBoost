import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../Components/HomeScreen/Header";
import Colors from "../Utils/Colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import CourseList from "../Components/HomeScreen/CourseList";
import CourseProgressBar from "../Components/HomeScreen/CourseProgressBar";
import { createNewUser, getUserDetail } from "../services";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { UserPointsContext } from "../Context/UserPointsContext";

const HomeScreen = () => {
  const { isLoaded, signOut } = useAuth();
  const { user } = useUser();
  const { userPoints, setUserPoints } = useContext(UserPointsContext);

  useEffect(() => {
    user && createUser();
  }, [user]);

  const createUser = () => {
    if (user) {
      createNewUser(
        user.fullName,
        user.primaryEmailAddress.emailAddress,
        user.imageUrl
      ).then((resp) => {
        if (resp) GetUser();
      });
    }
  };

  const GetUser = () => {
    getUserDetail(user.primaryEmailAddress.emailAddress).then((resp) => {
      console.log("--", resp.userDetail?.point);
      setUserPoints(resp.userDetail?.point);
    });
  };

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
        <Header userPoints={userPoints} />
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
