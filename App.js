import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

//Redux
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

//Screens
import Home from "./src/screen/Home";
import Books from "./src/screen/Books";
import BooksDetail from "./src/screen/BookDatail";

export default function App() {
  //Permite usar fuentes personalizadas
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    BlackOpsOne: require("./assets/fonts/Black_Ops_One/BlackOpsOne-Regular.ttf"),
  });

  //No renderiza el componente hasta que se hayan cargados las letras
  if (!fontsLoaded) return;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
        <Books />
        <BooksDetail />
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
