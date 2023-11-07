import { useSelector } from "react-redux";

import { useGetUserByUidQuery } from "../services/bookApi";

export default useGetUserDataById = (userId) => {
  const { data, isLoading, isFetching, refetch } = useGetUserByUidQuery(userId);
  const { image, firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, placeName, isSharingCoordinates } =
    exchangePoint;

  return {
    data,
    email,
    firstName,
    image,
    isFetching,
    isLoading,
    isSharingCoordinates,
    lastName,
    latitude,
    longitude,
    placeName,
    refetch,
    userId,
  };
};
