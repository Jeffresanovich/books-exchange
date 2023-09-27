//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import HomeScreen from "../../screens/tabScreens/HomeScreen";
import BookDatailScreen from "../../screens/tabScreens/BookDatailScreen";

//Component
import IconOpenDrawerComponent from "../../components/IconOpenDrawerComponent";

//Drawer
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Inicio",
          ...headerStyles,
          headerLeft: () => <IconOpenDrawerComponent />,
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          title: "Detalles",
          ...headerStyles,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
