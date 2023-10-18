//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import LibraryScreen from "../../screens/tabScreens/LibraryScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";
import BookRegisterScreen from "../../screens/tabScreens/BookRegisterScreen";

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
      <Stack.Screen name='BookRegisterScreen' component={BookRegisterScreen} />
    </Stack.Navigator>
  );
};

export default LibraryStack;
