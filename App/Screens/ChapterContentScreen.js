import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Content from "../Components/ChapterContent/Content";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MarkChapterCompleted } from "../services/index.js";
import { CompleteChapterContext } from "../Context/CompleteChapterContext";
import { useUser } from "@clerk/clerk-expo";
export default function ChapterContentScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const { user } = useUser();
  const { isChapterComplete, setIsChapterComplete } = useContext(
    CompleteChapterContext
  );

  useEffect(() => {}, [param]);
  const onChapterFinish = async () => {
    MarkChapterCompleted(
      param.chapterId,
      param.userCourseRecordId,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      if (resp) {
        ToastAndroid.show("Chapter Completed!", ToastAndroid.LONG);
        setIsChapterComplete(true);
      }
    });
  };
  return (
    param.content && (
      <View>
        <Content
          content={param.content}
          onChapterFinish={() => onChapterFinish()}
        />
      </View>
    )
  );
}
