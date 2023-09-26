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
      }}
    >
      <Stack.Screen name='BooksSearchScreen' component={BooksSearchScreen} />
      <Stack.Screen name='BookDatailScreen' component={BookDatailScreen} />
    </Stack.Navigator>
  );
};

export default BooksSearchStack;
