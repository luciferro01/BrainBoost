import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  // const { isLoaded, isSignedIn, user } = useUser();
  return (
    <View>
      <Text>Hello</Text>
    </View>
    // isLoaded && (
    //   <View style={{ padding: 20 }}>
    //     <View>
    //       <Image
    //         source={{ uri: user?.image }}
    //         style={{ height: 50, width: 50, borderRadius: 99 }}
    //       />
    //     </View>
    //   </View>
    // )
  );
}
