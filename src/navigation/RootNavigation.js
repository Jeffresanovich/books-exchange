import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import BooksSearchScreen from "../screens/BooksSearchScreen";

import BookDatailScreen from "../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='BooksSearchScreen' component={BooksSearchScreen} />
      <Stack.Screen name='BookDatailScreen' component={BookDatailScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
