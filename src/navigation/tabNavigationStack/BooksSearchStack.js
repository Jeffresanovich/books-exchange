import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import BooksSearchScreen from "../../screens/tab/BooksSearchScreen";
import BookDetailScreen from "../../screens/other/BookDetailScreen";

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
