import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { headerStyles } from "../theme/commonStyles";

//TabNavigation screen => Home
import TabNavigation from "./TabNavigation";

//Direct screen
import ProfileScreen from "../screens/drawer/ProfileScreen";
import NotificationScreen from "../screens/drawer/NotificationScreen";
import SettingScreen from "../screens/drawer/SettingScreen";

import useGetUserData from "../hook/useGetUserData";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const { firstName, lastName } = useGetUserData();

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
          title: `Perfil de ${firstName} ${lastName}`,
          ...headerStyles,
        }}
      />
      <Drawer.Screen
        name='TabNavigation'
        component={TabNavigation}
        options={{
          title: "BIBLIOTECA",
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
