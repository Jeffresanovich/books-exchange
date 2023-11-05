//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import LibraryScreen from "../../screens/tab/LibraryScreen";
import DetailsScreen from "../../screens/other/DetailsScreen";
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
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      <Stack.Screen name='FormScreen' component={FormScreen} />
    </Stack.Navigator>
  );
};

export default LibraryStack;
