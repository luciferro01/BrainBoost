import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetailScreen from "../Screens/CourseDetailScreen";
import HomeScreen from "../Screens/HomeScreen"; // Make sure to import HomeScreen
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="course-detail" component={CourseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenNavigation;
