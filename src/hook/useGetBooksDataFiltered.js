import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../services/bookApi";

export default useGetBooksDataFiltered = () => {
  const userId = useSelector((state) => state.userSlice.id);
  const { data, isLoading, refetch } = useGetAllBooksQuery();
  const [allBookConverted, setAllBookConverted] = useState([]);

  /**
   * This custom hook slice the data (object) from firebase and the firebase key
   * then save then together in a new object returned an array.
   * @param {Object} data Data (object) like response from realtime database.
   * @returns Return an array
   */
  useEffect(() => {
    const convertArray = [];
    for (const key in data) {
      convertArray.push({ ...data[key], key });
    }
    setAllBookConverted(convertArray);
  }, [data]);

  const filteredBooksReading = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === userId);

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  const filteredBooksToDeliver = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId !== userId)
      .filter((item) => item.transaction.sharingUserId !== "");

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  const filteredBooksToReceive = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === userId)
      .filter((item) => item.transaction.sharingUserId !== "");

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  const filteredBooksToShared = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  const filteredBooksUploaded = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) => item.book_data.ownerUserId === userId)
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === userId);

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  const filteredCurrentUserBooksToShared = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  const filteredSharingBooksByTitle = (setStateCallBack = null) => {
    const filtered = allBookConverted
      .filter((item) =>
        item.book_data.title.toLowerCase().startsWith(title.toLowerCase())
      )
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Setea el estado que se pase por parametro
    setStateCallBack && setStateCallBack(filtered);
    return filtered;
  };

  return {
    isLoading,
    refetch,
    filteredBooksReading,
    filteredBooksToDeliver,
    filteredBooksToReceive,
    filteredBooksToShared,
    filteredBooksUploaded,
    filteredCurrentUserBooksToShared,
    filteredSharingBooksByTitle,
  };
};
