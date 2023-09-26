import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExChangeScreen from "../../screens/ExChangeScreen";
import BookDatailScreen from "../../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const ExchangeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='ExChangeScreen'
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='ExChangeScreen'
        component={ExChangeScreen}
        options={{
          headerShown: true,
          title: "INTERCAMBIO",
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          headerShown: true,
          title: "DETALLES",
        }}
      />
    </Stack.Navigator>
  );
};
export default ExchangeStack;
