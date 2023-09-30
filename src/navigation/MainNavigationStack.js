import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

//Navigation
import DrawerNavigation from "./DrawerNavigation";
import AuthNavigastionStack from "./AuthNavigationStack";

const MainNavigationStack = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigastionStack />}
    </NavigationContainer>
  );
};

export default MainNavigationStack;
