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
  const dispatch = useDispatch();
  const [checkUser, setCheckUser] = useState(true);
  const user = useSelector((state) => state.userSlice.id);

  const getUserId = async () => {
    const userIdFromStorage = await getUserIdFromStorage();
    if (userIdFromStorage) {
      dispatch(setUserId(userIdFromStorage));
      setCheckUser(userIdFromStorage);
    } else setCheckUser(user);
  };

  useEffect(() => {
    getUserId();
  }, [user]);

  return (
    <NavigationContainer>
      {checkUser ? <DrawerNavigation /> : <AuthNavigastionStack />}
    </NavigationContainer>
  );
};

export default MainNavigationStack;
