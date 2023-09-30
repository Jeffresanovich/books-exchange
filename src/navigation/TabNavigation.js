import { useEffect } from "react";

//Stacks
import HomeStack from "./tabNavigationStack/HomeStack";
import BooksSearchStack from "./tabNavigationStack/BooksSearchStack";
import ExchangeStack from "./tabNavigationStack/ExchangeStack";

//Redux
import { useDispatch } from "react-redux";
import { setDrawerNavigation } from "../redux/slice/routingSlice";

//Icons
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDrawerNavigation(navigation));
  }, [navigation]);

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
            <MaterialCommunityIcons
              name='book-sync-outline'
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
