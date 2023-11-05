//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import LibraryScreen from "../../screens/tab/LibraryScreen";
import BookDetailScreen from "../../screens/other/BookDetailScreen";
import FormScreen from "../../screens/other/FormScreen";

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
