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
      }}
    >
      <Stack.Screen name='ExChangeScreen' component={ExChangeScreen} />
      <Stack.Screen name='BookDatailScreen' component={BookDatailScreen} />
    </Stack.Navigator>
  );
};

export default ExchangeStack;
