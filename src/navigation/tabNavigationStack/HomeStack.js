//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import LibraryScreen from "../../screens/tabScreens/LibraryScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

//Drawer
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LibraryScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='LibraryScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LibraryScreen' component={LibraryScreen} />
      <Stack.Screen name='BookDetailScreen' component={BookDetailScreen} />
    </Stack.Navigator>
  );
};

export default LibraryScreen;
