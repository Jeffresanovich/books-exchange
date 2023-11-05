import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import SearchScreen from "../../screens/tab/SearchScreen";
import DetailsScreen from "../../screens/other/DetailsScreen";

const Stack = createNativeStackNavigator();

const BooksSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SearchScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
  );
};
export default BooksSearchStack;
