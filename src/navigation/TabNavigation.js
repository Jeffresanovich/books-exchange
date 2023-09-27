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

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "#fff",
        activeBackgroundColor: "#feb72b",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={focused ? 35 : 25} />
          ),
        }}
      />
      <Tab.Screen
        name='BooksSearchStack'
        component={BooksSearchStack}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='search' size={focused ? 35 : 25} />
          ),
        }}
      />
      <Tab.Screen
        name='ExchangeStack'
        component={ExchangeStack}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name='sync' size={focused ? 35 : 25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
