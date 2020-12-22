import React from "react";
import { Text, StyleSheet } from "react-native";

export function ListItem({ item, style }) {
  // generic list should have key/value in item object
  return (
    <Text key={item.key} style={[styles.listItem, style]}>
      {item.value}
    </Text>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#000000",
  },
});
