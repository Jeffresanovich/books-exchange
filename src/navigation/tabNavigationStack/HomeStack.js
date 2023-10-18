//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import HomeScreen from "../../screens/tabScreens/HomeScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

//Drawer
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='BookDetailScreen' component={BookDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
