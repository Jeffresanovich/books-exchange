import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../services/bookApi";

export default useGetBooksData = () => {
  const { data, isLoading, isFetching, refetch } = useGetAllBooksQuery();
  const userId = useSelector((state) => state.userSlice.id);

  /**
   * This custom hook slice the data (object) from firebase and the firebase key
   * then save then together in a new object returned an array.
   * @param {Object} data Data (object) like response from realtime database.
   * @returns Return an array
   */

  const convertDataResponse = () => {
    const convertArray = [];
    for (const key in data) {
      convertArray.push({ ...data[key], key });
    }
    return convertArray;
  };

  //Filter the books the user is reading
  const booksReading = () => {
    const dataFiltered = convertDataResponse()
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === userId);
    return dataFiltered;
  };

  //Filter the books that the user has to deliver
  const booksToDeliver = () => {
    const dataFiltered = convertDataResponse()
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId !== userId)
      .filter((item) => item.transaction.sharingUserId !== "");
    return dataFiltered;
  };

  //Filter the books that the user has to receive
  const booksToReceive = () => {
    //Filtra, quitando los que ya tiene el usuario
    const dataFiltered = convertDataResponse()
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === userId)
      .filter((item) => item.transaction.sharingUserId !== "");
    return dataFiltered;
  };

  //
  const booksToShared = () => {
    //Filtra, quitando los que ya tiene el usuario
    const dataFiltered = convertDataResponse()
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === "");
    return dataFiltered;
  };

  //Filter the books that another user is sharing
  const booksUploaded = (setCallBack = null) => {
    const dataFiltered = convertDataResponse()
      .filter((item) => item.book_data.ownerUserId === userId)
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === userId);

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return dataFiltered;
  };

  //Filter the books that the current user is sharing
  const currentUserBooksToShared = (setCallBack = null) => {
    const dataFiltered = convertDataResponse()
      .filter((item) => item.transaction.currentUserId === userId)
      .filter((item) => item.transaction.sharingUserId === "");

    //Set the callback state that is passed by parameter
    setCallBack && setCallBack(dataFiltered);
    return dataFiltered;
  };

  //Filter books by title that another user is sharing
  const sharingBooksByTitle = (title) => {
    //Filter by title
    const dataFiltered = convertDataResponse()
      .filter((item) =>
        item.book_data.title.toLowerCase().startsWith(title.toLowerCase())
      )
      .filter((item) => item.transaction.currentUserId !== userId)
      .filter((item) => item.transaction.sharingUserId === "");
    return dataFiltered;
  };

  //Filter a book by key from State
  const filteredBookByKey = (bookey) => {
    //Filter by key
    const [dataFiltered] = convertDataResponse().filter((item) =>
      item.key.startsWith(bookey)
    );

    return getAllInfoFromDataBookObject(dataFiltered);
  };

  //Filter a book by key from firebase
  const filteredBookByKeyFromFirebase = (bookey) => {
    //
    //TODO:Get book by key from FIREBASE (RTK Query)
    //
    return getAllInfoFromDataBookObject([dataFiltered]);
  };

  //Return all user data
  const getAllInfoFromDataBookObject = (dataObject) => {
    const { book_data, transaction } = dataObject;
    const { image, title, synopsis, subjects, pages, author, ownerUserId } =
      book_data;
    const { currentUserId, sharingUserId } = transaction;

    return {
      userId,
      image,
      title,
      synopsis,
      subjects,
      pages,
      author,
      ownerUserId,
      currentUserId,
      sharingUserId,
      refetch,
    };
  };

  return {
    userId,
    data,
    isLoading,
    isFetching,
    refetch,
    booksReading,
    booksToDeliver,
    booksToReceive,
    booksToShared,
    booksUploaded,
    currentUserBooksToShared,
    sharingBooksByTitle,
    filteredBookByKey,
    filteredBookByKeyFromFirebase,
  };
};
