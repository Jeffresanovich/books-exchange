import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BooksSearchScreen from "../../screens/BooksSearchScreen";
import BookDatailScreen from "../../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const BooksSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BooksSearchScreen'
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='BooksSearchScreen'
        component={BooksSearchScreen}
        options={{
          title: "BUSCADOR",
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          title: "DETALLES",
        }}
      />
    </Stack.Navigator>
  );
};
export default BooksSearchStack;
