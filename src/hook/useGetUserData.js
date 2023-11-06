import { useSelector } from "react-redux";

import { useGetUserByUidQuery } from "../services/bookApi";

export default useGetUserData = (userIdFromParam = null) => {
  const userIdFromRedux = useSelector((state) => state.userSlice.id);

  const userId = userIdFromParam ? userIdFromParam : userIdFromRedux;

  const { data, isLoading, isFetching, refetch } = useGetUserByUidQuery(userId);
  const { image, firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, isSharingCoordinates } = exchangePoint;

  return {
    userId,
    data,
    isLoading,
    isFetching,
    refetch,
    image,
    firstName,
    lastName,
    email,
    latitude,
    longitude,
    isSharingCoordinates,
  };
};
