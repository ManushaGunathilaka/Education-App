import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CourseList from "../../components/CourseList";
import Lodin from "../../components/Lodin";
import { useClick } from "../../context/ClickContext";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { clickCount } = useClick();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://openlibrary.org/subjects/software_engineering.json"
      );
      const data = await response.json();

      const mappedData = data.works.map((work) => ({
        id: work.key,
        title: work.title,
        instructor: "Unknown Author",
        description: work.subjects
          ? work.subjects.join(", ")
          : "No description available",
        students: Math.floor(Math.random() * 500 + 1),
        image: work.cover_id
          ? `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`
          : "https://via.placeholder.com/150",
      }));

      setCourses(mappedData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {loading ? (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <Lodin size={hp(10)} />
        </View>
      ) : (
        <CourseList courses={courses} />
      )}

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>{`Clicks: ${clickCount}`}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007BFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
