import { View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CourseList from "../../components/CourseList";
import Lodin from "../../components/Lodin";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://openlibrary.org/subjects/software_engineering.json"
      );
      const data = await response.json();

      // Map data to match the app structure
      const mappedData = data.works.map((work) => ({
        id: work.key,
        title: work.title,
        instructor: "Unknown Author", // Replace with actual author data if available
        description: work.subjects
          ? work.subjects.join(", ")
          : "No description available",
        students: Math.floor(Math.random() * 500 + 1), // Randomize student count
        image: work.cover_id
          ? `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`
          : "https://via.placeholder.com/150", // Placeholder if no cover is available
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
    </View>
  );
}
