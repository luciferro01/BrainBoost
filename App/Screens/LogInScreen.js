import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import appImage from "../../assets/images/app.png";
import Colors from "../Utils/Colors";

import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser.tsx";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

WebBrowser.maybeCompleteAuthSession();
const LogInScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

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
          onPress={onPress}
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
          <Image
            source={require("../../assets/images/google.png")}
            style={{ width: wp(7), height: hp(5) }}
          />
          <Text
            style={{
              fontSize: wp(5),
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
