import "react-native-gesture-handler";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "../SubHeading";
import Colors from "../../Utils/Colors";
import CourseItem from "./CourseItem.js";
import { localDB } from "../../Utils/_db";
import { useNavigation } from "@react-navigation/native";
import CourseDetailScreen from "../../Screens/CourseDetailScreen";
import { Screen } from "react-native-screens";
// import { getCourseList } from "../../services/";

export default function CourseList({ level }) {
  // For Local Database Connection
  const [courseList, setCourseList] = useState(localDB.courses);
  const navigation = useNavigation();

  // const [courseList, setCourseList] = useState([]);
  // useEffect(() => {
  //   getCourses();
  // }, []);

  // const getCourses = () => {
  //   getCourseList(level).then((resp) => {
  //     console.log("RESP : ", resp);
  //     setCourseList(resp?.courses);
  //   });
  // };

  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading
        text={level + " Courses"}
        color={level == "Basic" && Colors.WHITE}
      />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("course-detail", { course: item })
            }
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
