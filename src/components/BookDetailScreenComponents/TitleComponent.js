import { StyleSheet, Text } from "react-native";

const TitleComponent = ({ otherStyle, title }) => {
  return <Text style={[styles.title, otherStyle]}>{title}</Text>;
};

export default TitleComponent;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
});
