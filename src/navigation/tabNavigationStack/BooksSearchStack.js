import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import BooksSearchScreen from "../../screens/tabScreens/BooksSearchScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

import IconOpenDrawerComponent from "../../components/IconOpenDrawerComponent";

const Stack = createNativeStackNavigator();

const BooksSearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BooksSearchScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='BooksSearchScreen'
        component={BooksSearchScreen}
        options={{
          title: "Buscador",
          ...headerStyles,
          headerLeft: () => <IconOpenDrawerComponent />,
        }}
      />
      <Stack.Screen
        name='BookDetailScreen'
        component={BookDetailScreen}
        options={{
          title: "Detalles",
          ...headerStyles,
        }}
      />
    </Stack.Navigator>
  );
};
export default BooksSearchStack;
