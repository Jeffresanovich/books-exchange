import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import BookDatailScreen from "../../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "INICIO",
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          headerShown: true,
          title: "DETALLE",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
