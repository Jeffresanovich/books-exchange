import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

//Navigation
import DrawerNavigation from "./DrawerNavigation";
import AuthNavigastionStack from "./AuthNavigationStack";

//Redux
import { useSelector } from "react-redux";

const MainNavigationStack = () => {
  const user = useSelector((state) => state.authSlice.user);
  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigastionStack />}
    </NavigationContainer>
  );
};

export default MainNavigationStack;
