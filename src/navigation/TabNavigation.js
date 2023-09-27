import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";

//Stacks
import HomeStack from "./stack/HomeStack";
import BooksSearchStack from "./stack/BooksSearchStack";
import ExchangeStack from "./stack/ExchangeStack";

// Icons
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        //Tab Syles
        activeTintColor: "#9AC4F8",
        inactiveTintColor: "gray",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name='BooksSearchStack'
        component={BooksSearchStack}
        options={{
          title: "Buscador",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name='search' size={focused ? 35 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='ExchangeStack'
        component={ExchangeStack}
        options={{
          title: "Intercambio",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name='sync'
              size={focused ? 35 : 25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
