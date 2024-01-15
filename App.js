import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LogInScreen from "./App/Screens/LogInScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import HomeScreenNavigation from "./App/Navigations/HomeScreenNavigation";
import { CompleteChapterContext } from "./App/Context/CompleteChapterContext";
import { useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });

  const [isChapterComplete, setIsChapterComplete] = useState(false);

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SafeAreaProvider>
        <CompleteChapterContext.Provider
          value={{ isChapterComplete, setIsChapterComplete }}
        >
          <View style={styles.container}>
            <SignedIn>
              <NavigationContainer>
                <TabNavigation style={{ fontFamily: "outfit" }} />
              </NavigationContainer>
              {/* <NavigationContainer> 
             <HomeScreenNavigation /> 
            </NavigationContainer> */}
            </SignedIn>
            <SignedOut>
              <LogInScreen />
            </SignedOut>
            <StatusBar style="auto" />
          </View>
        </CompleteChapterContext.Provider>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
