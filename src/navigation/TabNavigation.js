import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Stacks
import HomeStack from "./stack/HomeStack";
import BooksSearchStack from "./stack/BooksSearchStack";
import ExchangeStack from "./stack/ExchangeStack";

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
        name='HomeStack'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={focused ? 35 : 20} color='black' />
          ),
          headerShown: true,
          title: "INICIO",
        }}
      />
      <Tab.Screen
        name='BooksSearchStack'
        component={BooksSearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='search' size={focused ? 35 : 20} color='black' />
          ),
          headerShown: true,
          title: "BUSCADOR",
        }}
      />
      <Tab.Screen
        name='ExchangeStack'
        component={ExchangeStack}
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
