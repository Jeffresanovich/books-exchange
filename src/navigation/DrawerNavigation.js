import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { headerStyles } from "../theme/commonStyles";

//TabNavigation screen => Home
import TabNavigation from "./TabNavigation";

//Direct screen
import ProfileScreen from "../screens/drawer/ProfileScreen";
import NotificationScreen from "../screens/drawer/NotificationScreen";
import SettingScreen from "../screens/drawer/SettingScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName='TabNavigation'
      screenOptions={{
        drawerType: "slice",
        headerShown: true,
        //drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title: `PERFIL DE USUARIO`,
          ...headerStyles,
        }}
      />
      <Drawer.Screen
        name='TabNavigation'
        component={TabNavigation}
        options={{
          title: "Biblioteca",
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
