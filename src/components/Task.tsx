import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function Task() {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#1E1E1E" : "#FFFFFF" },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: theme === "dark" ? "#FFFFFF" : "#000000" },
        ]}
      >
        Task ndnfjnafndjakfdaknf
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
