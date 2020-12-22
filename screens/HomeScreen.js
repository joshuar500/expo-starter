import React from "react";
import { Button, View, Text } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    // TODO: throw this in a StyleSheet
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
