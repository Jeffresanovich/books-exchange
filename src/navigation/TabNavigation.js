//Stacks
import LibraryStack from "./tabNavigationStack/LibraryStack";
import BooksSearchStack from "./tabNavigationStack/BooksSearchStack";
import ExchangeStack from "./tabNavigationStack/ExchangeStack";

//Icons
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        //Tab Syles
        activeTintColor: "#9AC4F8",
        inactiveTintColor: "gray",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name='LibraLibraryStackryScreen'
        component={LibraryStack}
        options={{
          title: "Biblioteca",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name='bookshelf'
              size={focused ? 40 : 30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='BooksSearchStack'
        component={BooksSearchStack}
        options={{
          title: "Buscador",
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name='search'
              size={focused ? 40 : 30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ExchangeStack'
        component={ExchangeStack}
        options={{
          title: "Intercambio",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5 name='users' size={focused ? 35 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
