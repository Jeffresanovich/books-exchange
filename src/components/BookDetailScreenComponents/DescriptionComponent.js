import { StyleSheet, Text } from "react-native";

import { themeColors } from "../../theme/commonStyles";

const DescriptionComponent = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};

export default DescriptionComponent;

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    backgroundColor: themeColors.lightBlue,
    padding: 20,
    textAlign: "center",
    fontWeight: "300",
  },
});
