import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavigation } from "../redux/slice/routingSlice";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigation(navigation));
  }, []);

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
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name='home' size={focused ? 35 : 25} color={color} />
          ),
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
