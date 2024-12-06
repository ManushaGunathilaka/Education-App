import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function CourseItem({ course }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.instructor}>Instructor: {course.instructor}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.students}>{course.students} students enrolled</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  students: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
});
