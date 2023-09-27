import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

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

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={focused ? 35 : 20} color='black' />
          ),
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name='BooksSearchStack'
        component={BooksSearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='search' size={focused ? 35 : 20} color='black' />
          ),
          title: "Buscador",
        }}
      />
      <Drawer.Screen
        name='ExchangeStack'
        component={ExchangeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='sync'
              size={focused ? 40 : 25}
              color='black'
            />
          ),
          title: "Intercambio",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
