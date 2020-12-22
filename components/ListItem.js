import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ListItem({ item, style }) {
  // generic list should have key/value in item object
  return (
    <TouchableOpacity style={[styles.listItem, style]}>
      <Text key={item.key}>{item.value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
