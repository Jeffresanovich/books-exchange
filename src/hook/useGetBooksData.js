import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../services/bookApi";

export default useGetBooksDataFiltered = () => {
  const userId = useSelector((state) => state.userSlice.id);
  const { data, isLoading, isFetching, refetch } = useGetAllBooksQuery();
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

  //Filter the books the user is reading
  const filteredBooksReading = (setCallBack = null) => {
    const filtered = convertDataResponse(data);
    const dataFiltered = allBookConverted
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === userId);

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //Filter the books that the user has to deliver
  const filteredBooksToDeliver = (setCallBack = null) => {
    const filtered = convertDataResponse(data);
    const dataFiltered = allBookConverted
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId !== userId)
      .filter((item) => item.transaction.sharingUserId !== "");

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //Filter the books that the user has to receive
  const filteredBooksToReceive = (setCallBack = null) => {
    const filtered = convertDataResponse(data);
    //Filtra, quitando los que ya tiene el usuario
    const dataFiltered = allBookConverted
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === userId)
      .filter((item) => item.transaction.sharingUserId !== "");

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //
  const filteredBooksToShared = (setCallBack = null) => {
    const filtered = convertDataResponse(data);
    //Filtra, quitando los que ya tiene el usuario
    const dataFiltered = allBookConverted
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //Filter the books that another user is sharing
  const filteredBooksUploaded = (setCallBack = null) => {
    const filtered = convertDataResponse(data);
    const dataFiltered = allBookConverted
      .filter((item) => item.book_data.ownerUserId === userId)
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === userId);

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //Filter the books that the current user is sharing
  const filteredCurrentUserBooksToShared = (setCallBack = null) => {
    const filtered = convertDataResponse(data);
    const dataFiltered = allBookConverted
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //Filter books by title that another user is sharing
  const filteredSharingBooksByTitle = (title, setCallBack = null) => {
    const filtered = convertDataResponse(data);
    //Filter by title
    const dataFiltered = allBookConverted
      .filter((item) =>
        item.book_data.title.toLowerCase().startsWith(title.toLowerCase())
      )
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return filtered;
  };

  //Filter a book by key
  const filteredBookByKey = (bookey, setCallBack = null) => {
    const filtered = convertDataResponse(data);
    //Filter by key
    const dataFiltered = allBookConverted.filter((item) =>
      item.key.startsWith(bookey)
    );

    const { image, title, synopsis, subjects, pages, author, ownerUserId } =
      dataFiltered[0].book_data;
    const { currentUserId, sharingUserId } = dataFiltered[0].transaction;

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);

    //Return all user data
    return {
      image,
      title,
      synopsis,
      subjects,
      pages,
      author,
      ownerUserId,
      currentUserId,
      sharingUserId,
    };
  };

  return {
    data,
    isLoading,
    isFetching,
    refetch,
    filteredBooksReading,
    filteredBooksToDeliver,
    filteredBooksToReceive,
    filteredBooksToShared,
    filteredBooksUploaded,
    filteredCurrentUserBooksToShared,
    filteredSharingBooksByTitle,
    filteredBookByKey,
  };
};
