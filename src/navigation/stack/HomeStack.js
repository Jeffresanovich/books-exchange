import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import BookDatailScreen from "../../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Inicio",
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

export default HomeStack;
