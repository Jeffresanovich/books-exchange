import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import BooksSearchScreen from "../../screens/tabScreens/BooksSearchScreen";
import BookDatailScreen from "../../screens/tabScreens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const BooksSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BooksSearchScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='BooksSearchScreen'
        component={BooksSearchScreen}
        options={{
          title: "Buscardor",
          ...headerStyles,
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          title: "Detalles",
          ...headerStyles,
        }}
      />
    </Stack.Navigator>
  );
};
export default BooksSearchStack;
