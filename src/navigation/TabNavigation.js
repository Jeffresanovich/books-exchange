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
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={focused ? 35 : 20} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name='BooksSearchStack'
        component={BooksSearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='search' size={focused ? 35 : 20} color='black' />
          ),
        }}
      />
      <Tab.Screen
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
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
