import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { headerStyles } from "../theme/commonStyles";

import TabNavigation from "./TabNavigation";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingScreen from "../screens/SettingScreen";

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
        headerShown: false,
        //drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name='TabNavigation'
        component={TabNavigation}
        options={{
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title: "Perfil",
          ...headerStyles,
        }}
      />
      <Drawer.Screen
        name='NotificationScreen'
        component={NotificationScreen}
        options={{
          title: "Notificacion",
          ...headerStyles,
        }}
      />
      <Drawer.Screen
        name='SettingScreen'
        component={SettingScreen}
        options={{
          title: "Configuracion",
          ...headerStyles,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
