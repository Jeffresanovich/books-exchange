import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import ExChangeScreen from "../../screens/tabScreens/ExChangeScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

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
      <Stack.Screen name='BookDetailScreen' component={BookDetailScreen} />
    </Stack.Navigator>
  );
};
export default ExchangeStack;
