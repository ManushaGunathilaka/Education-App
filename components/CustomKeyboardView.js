import { View, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";

export default function CustomKeyboardView({ children }) {
  const ios = Platform.OS === "ios";

  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// import { View, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
// import React from "react";

// export default function CustomKeyboardView({ children }) {
//   const ios = Platform.OS === "ios";

//   return (
//     <KeyboardAvoidingView
//       behavior={ios ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         keyboardShouldPersistTaps="handled"
//         bounces={false}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={{ padding: 16 }}>{children}</View> {/* Optional padding */}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
