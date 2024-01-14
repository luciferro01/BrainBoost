import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetailScreen from "../Screens/CourseDetailScreen";
import MyCourse from "../Screens/MyCourse";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const HomeScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: "false" }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="course-detail" component={CourseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenNavigation;
