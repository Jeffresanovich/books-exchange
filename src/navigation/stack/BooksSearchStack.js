import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BooksSearchScreen from "../../screens/BooksSearchScreen";
import BookDatailScreen from "../../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const BooksSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BooksSearchScreen'
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='BooksSearchScreen'
        component={BooksSearchScreen}
        options={{
          title: "Buscardor",
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          title: "Detalles",
        }}
      />
    </Stack.Navigator>
  );
};
export default BooksSearchStack;
