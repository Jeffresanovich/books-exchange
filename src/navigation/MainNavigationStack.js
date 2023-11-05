import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

//Navigation
import DrawerNavigation from "./DrawerNavigation";
import AuthNavigastionStack from "./AuthNavigationStack";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";

import { getUserIdFromStorage } from "../hook/useAsyncStorage";

const MainNavigationStack = () => {
  const user = useSelector((state) => state.userSlice.id);

  const dispatch = useDispatch();
  const getUserId = async () => {
    const userIdFromStorage = await getUserIdFromStorage();
    dispatch(setUserId(userIdFromStorage));
  };

  useEffect(() => {
    getUserId();
  }, []);

  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigastionStack />}
    </NavigationContainer>
  );
};

export default MainNavigationStack;
