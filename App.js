import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LogInScreen from "./App/Screens/LogInScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-semiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <LogInScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
