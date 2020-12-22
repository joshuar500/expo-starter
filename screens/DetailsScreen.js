import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ListItem } from "../components/ListItem";
import { MockGetNamesList } from "../services/mockApi";

export function DetailsScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // make asynchronous calls (for example, in an API) inside a useEffect hook
    // example mock IFFE async call
    (async () => {
      const response = await MockGetNamesList();
      setData(response);
    })();
  }, []); // empty array `[]` means this effect will only run once

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listView: {
    width: "100%",
    padding: 20,
  },
  listItem: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
  },
});
