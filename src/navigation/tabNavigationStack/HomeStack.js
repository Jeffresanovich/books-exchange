//Styles
import { headerStyles } from "../../theme/commonStyles";

//Screens
import HomeScreen from "../../screens/tabScreens/HomeScreen";
import BookDetailScreen from "../../screens/tabScreens/BookDetailScreen";

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
          //headerLeft: () => <IconOpenDrawerComponent />,
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

export default HomeStack;
