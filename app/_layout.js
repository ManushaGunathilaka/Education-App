import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";

// Import your global CSS file
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";

const MainLayOut = () => {
  //hooks
  const { isAuthonticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    //check if user is authonticated or not

    if (typeof isAuthonticated == "undefined") return;

    const inApp = segments[0] == "(app)";

    if (isAuthonticated && !inApp) {
      //redirect to home
      router.replace("home");
    } else if (isAuthonticated == false) {
      //redirect to signIn page
      router.replace("signIn");
    }
  }, [isAuthonticated]);

  return <Slot />;
  // export default Slot;
};
export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayOut />
    </AuthContextProvider>
  );
}
