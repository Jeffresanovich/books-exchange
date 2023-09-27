import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExChangeScreen from "../../screens/ExChangeScreen";
import BookDatailScreen from "../../screens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const ExchangeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='ExChangeScreen'
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='ExChangeScreen'
        component={ExChangeScreen}
        options={{
          title: "Intercambio",
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
export default ExchangeStack;
