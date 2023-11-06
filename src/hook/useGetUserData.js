import { useSelector } from "react-redux";

import { useGetUserByUidQuery } from "../services/bookApi";

export default useGetUserData = () => {
  const userId = useSelector((state) => state.userSlice.id);

  const { data, isLoading, isFetching, refetch } = useGetUserByUidQuery(userId);
  const { image, firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, isSharingCoordinates } = exchangePoint;

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
    refetch,
    userId,
  };
};
