import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Stacks
import RootNavigation from "./RootNavigation";

//Screens
import ExChangeScreen from "../screens/ExChangeScreen";

// Icons
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={RootNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={focused ? 35 : 20} color='black' />
          ),
          headerShown: true,
          title: "INICIO",
        }}
      />
      <Tab.Screen
        name='BooksSearchScreen'
        component={RootNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='search' size={focused ? 35 : 20} color='black' />
          ),
          headerShown: true,
          title: "BUSCADOR",
        }}
      />
      <Tab.Screen
        name='exchangeScreen'
        component={ExChangeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='exchange'
              size={focused ? 35 : 20}
              color='black'
            />
          ),
          headerShown: true,
          title: "INTERCAMBIO",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
