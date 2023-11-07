import { StyleSheet, Text } from "react-native";

import { themeColors } from "../../theme/commonStyles";

const TitleListComponent = ({ title }) => {
  return <Text style={styles.titulo}>{title}</Text>;
};

export default TitleListComponent;

const styles = StyleSheet.create({
  titulo: {
    paddingVertical: "2%",
    fontSize: 25,
    textAlign: "center",
    color: "white",
    //fontFamily: "",
    backgroundColor: themeColors.mediumBlue,
  },
});
