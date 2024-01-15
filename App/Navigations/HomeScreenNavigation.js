import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseDetailScreen from "../Screens/CourseDetailScreen";
import HomeScreen from "../Screens/HomeScreen";
import ChapterContentScreen from "../Screens/ChapterContentScreen";

const Stack = createStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
      <Stack.Screen name="chapter-content" component={ChapterContentScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;
