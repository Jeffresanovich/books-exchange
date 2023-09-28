import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

//Screens
import ExChangeScreen from "../../screens/tabScreens/ExChangeScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

import IconOpenDrawerComponent from "../../components/IconOpenDrawerComponent";

const Stack = createNativeStackNavigator();

const ExchangeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='ExChangeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='ExChangeScreen'
        component={ExChangeScreen}
        options={{
          title: "Intercambio",
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
export default ExchangeStack;
