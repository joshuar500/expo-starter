import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import { ListItem } from "../components/ListItem";

export function DetailsScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // make asynchronous calls (for example, in an API) inside a useEffect hook
    setData([
      { key: 1, value: "Devin" },
      { key: 2, value: "Dan" },
      { key: 3, value: "Dominic" },
      { key: 4, value: "Jackson" },
      { key: 5, value: "James" },
      { key: 6, value: "Joel" },
      { key: 7, value: "John" },
      { key: 8, value: "Jillian" },
      { key: 9, value: "Jimmy" },
      { key: 10, value: "Julie" },
    ]);
  }, []); // empty array `[]` means this effect will only run once

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <View style={styles.listView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem style={styles.listItem} item={item} />
          )}
        />
      </View>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listView: {
    height: "50%",
    padding: 20,
  },
  listItem: {},
});
