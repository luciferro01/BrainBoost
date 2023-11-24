import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import appImage from "../../assets/images/appImage.jpg";
import Colors from "../Utils/Colors";
import { Touchable } from "react-native";

const LogInScreen = () => {
  return (
    <View style={{ display: "flex", alignItems: "center", marginTop: 50 }}>
      <Image
        source={appImage}
        style={{ width: 250, height: 500, objectFit: "cover" }}
      />

      <View
        style={{
          alignItems: "center",
          padding: 20,
          height: 400,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: -70,
        }}
      >
        <Text
          style={{
            marginTop: 50,
            textAlign: "center",
            fontSize: 35,
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
          }}
        >
          BrainBoost
        </Text>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
            color: Colors.LIGHT_PRIMARY,
            fontFamily: "outfit",
          }}
        >
          Your Ultimate Programming Learning Box
        </Text>
        <TouchableOpacity
        onPress={}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.WHITE,
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Icon name="google" size={30} color="black" />
          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
              fontFamily: "outfit",
            }}
          >
            Sign In using Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInScreen;
