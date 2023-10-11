import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const data = [
  { id: "1", name: "Resultado 1" },
  { id: "2", name: "Resultado 2" },
  { id: "3", name: "Resultado 3" },
  // Agrega más datos aquí
];
const BooksSearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredData);
    setQuery(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Buscar...'
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
});

export default BooksSearchScreen;
