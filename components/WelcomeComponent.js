import { View, Text } from "react-native";
import React from "react";

export default function WelcomeComponent() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        WelcomeComponent
      </Text>
    </View>
  );
}
