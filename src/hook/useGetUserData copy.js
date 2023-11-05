import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";
import { useGetUserByUidQuery } from "../services/bookApi";

import {
  getUserIdFromStorage,
  saveUserIdFromStorage,
} from "../hook/useAsyncStorage";

export default useGetUserData = async (userIdFromProps = null) => {
  const [user, setUser] = useState(null);

  const userIdFromRedux = useSelector((state) => state.userSlice.id);
  const userIdFromStorage = await getUserIdFromStorage();

  const dispatch = useDispatch();

  if (userIdFromProps) setUser(userIdFromProps);
  else if (userIdFromStorage) {
    setUser(userIdFromStorage);
    dispatch(setUserId(userIdFromStorage));
  } else if (userIdFromRedux) {
    setUser(userIdFromRedux);
    saveUserIdFromStorage(userIdFromRedux);
  } else return null;

  const { data, isLoading, isFetching, refetch } = useGetUserByUidQuery(user);
  const { image, firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, placeName, isSharing } = exchangePoint;

  console.log("FETCHING: " + isFetching);

  return {
    userId,
    data,
    image,
    firstName,
    lastName,
    email,
    latitude,
    longitude,
    placeName,
    isSharing,
    isLoading,
    placeName,
    refetch,
  };
};
