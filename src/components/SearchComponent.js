import { StyleSheet, TextInput, View, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { themeColors } from "../theme/commonStyles";

const SearchComponent = ({ text, setText }) => {
  const clearText = () => {
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder='Buscar libro compartido...'
      />
      {text && (
        <Pressable onPress={clearText}>
          <MaterialIcons
            name='cleaning-services'
            size={30}
            color={themeColors.heavyBlue}
          />
        </Pressable>
      )}
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  input: {
    width: "90%",
    height: 50,
    margin: 5,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "black",
    padding: 10,
  },
});
