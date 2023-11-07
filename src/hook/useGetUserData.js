import { useSelector } from "react-redux";

import { useGetUserByUidQuery } from "../services/bookApi";

export default useGetUserData = () => {
  const userId = useSelector((state) => state.userSlice.id);
  console.log("IF FROM REDUX: ", userId);

  const { data, isLoading, isFetching, refetch } = useGetUserByUidQuery(userId);

  //  const { image, firstName, lastName, email, exchangePoint } = data;
  // const { latitude, longitude, isSharingCoordinates } = exchangePoint;

  //console.log("GET DATA: ", firstName);

  return {
    userId,
    data,
    isFetching,
    refetch,
    isLoading,
    /*
    email,
    image,
      firstName,
      lastName,
      isSharingCoordinates,
      latitude,
      longitude,
      */
  };
};
