import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUserId } from "../redux/slice/userSlice";
import { useGetUserByUidQuery } from "../services/bookApi";

import {
  getUserIdFromStorage,
  saveUserIdFromStorage,
} from "../hook/useAsyncStorage";

export default useGetUserData = () => {
  const userId = useSelector((state) => state.userSlice.id);

  const { data, isLoading, isFetching, refetch } = useGetUserByUidQuery(userId);
  const { image, firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, placeName, isSharing } = exchangePoint;

  return {
    //userId,
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
    refetch,
    isFetching,
    placeName,
  };
};
