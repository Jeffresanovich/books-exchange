import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import HomeScreen from "../screens/HomeScreen";
import BooksSearchScreen from "../screens/BooksSearchScreen";
import ExChangeScreen from "../screens/ExChangeScreen";

// Icons
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        name={"home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={focused ? 30 : 20} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name={"bookSearch"}
        component={BooksSearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name='search' size={focused ? 30 : 20} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name={"ExChange"}
        component={ExChangeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='exchange'
              size={focused ? 30 : 20}
              color='black'
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
