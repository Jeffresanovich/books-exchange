//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import LibraryScreen from "../../screens/tabScreens/LibraryScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";
import FormScreen from "../../screens/tabScreens/FormScreen";

//Drawer
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='LibraryScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LibraryScreen' component={LibraryScreen} />
      <Stack.Screen name='BookDetailScreen' component={BookDetailScreen} />
      <Stack.Screen name='FormScreen' component={FormScreen} />
    </Stack.Navigator>
  );
};

export default LibraryStack;
