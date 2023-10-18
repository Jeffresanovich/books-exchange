import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import BooksSearchScreen from "../../screens/tabScreens/BooksSearchScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

const Stack = createNativeStackNavigator();

const BooksSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BooksSearchScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='BooksSearchScreen' component={BooksSearchScreen} />
      <Stack.Screen name='BookDetailScreen' component={BookDetailScreen} />
    </Stack.Navigator>
  );
};
export default BooksSearchStack;
