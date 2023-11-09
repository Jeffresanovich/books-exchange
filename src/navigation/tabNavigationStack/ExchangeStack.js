import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import ExChangeScreen from "../../screens/tab/ExChangeScreen";
import DetailsScreen from "../../screens/other/DetailsScreen";

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
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
  );
};
export default ExchangeStack;
