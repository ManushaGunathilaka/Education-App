import { View, FlatList } from "react-native";
import React from "react";
import CourseItem from "./CourseItem";

export default function CourseList({ courses }) {
  return (
    <View className="flex-1">
      <FlatList
        data={courses}
        contentContainerStyle={{ paddingVertical: 25 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CourseItem course={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
