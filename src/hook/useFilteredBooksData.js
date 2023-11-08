/**
 * This custom hook slice the data (object) from firebase and the firebase key
 * then save then together in a new object returned an array.
 * @param {Object} data Data (object) like response from realtime database.
 * @returns Return an array
 */
const convertDataResponse = (data) => {
  const convertArray = [];
  for (const key in data) {
    convertArray.push({ ...data[key], key });
  }
  return convertArray;
};

//Filter the books the user is reading
export const filteredBooksReading = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const dataFiltered = allBooks
    .filter((item) => item.transaction.currentUserId === userId)
    .filter((item) => item.transaction.sharingUserId === userId);

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};

//Filter the books that the user has to deliver
export const filteredBooksToDeliver = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const dataFiltered = allBooks
    .filter((item) => item.transaction.currentUserId === userId)
    .filter((item) => item.transaction.sharingUserId !== userId)
    .filter((item) => item.transaction.sharingUserId !== "");

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};

//Filter the books that the user has to receive
export const filteredBooksToReceive = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  //Filtra, quitando los que ya tiene el usuario
  const dataFiltered = allBooks
    .filter((item) => item.transaction.currentUserId !== userId)
    .filter((item) => item.transaction.sharingUserId === userId)
    .filter((item) => item.transaction.sharingUserId !== "");

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};

//
export const filteredBooksToShared = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  //Filtra, quitando los que ya tiene el usuario
  const dataFiltered = allBooks
    .filter((item) => item.transaction.currentUserId !== userId)
    .filter((item) => item.transaction.sharingUserId === "");

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};

//Filter the books that another user is sharing
export const filteredBooksUploaded = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const dataFiltered = allBooks
    .filter((item) => item.book_data.ownerUserId === userId)
    .filter((item) => item.transaction.currentUserId === userId)
    .filter((item) => item.transaction.sharingUserId === userId);

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};

//Filter the books that the current user is sharing
export const filteredCurrentUserBooksToShared = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const dataFiltered = allBooks
    .filter((item) => item.transaction.currentUserId === userId)
    .filter((item) => item.transaction.sharingUserId === "");

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};

//Filter books by title that another user is sharing
export const filteredSharingBooksByTitle = (
  data,
  title,
  userId,
  setCallBack
) => {
  const allBooks = convertDataResponse(data);
  //Filtra por title
  const dataFiltered = allBooks
    .filter((item) =>
      item.book_data.title.toLowerCase().startsWith(title.toLowerCase())
    )
    .filter((item) => item.transaction.currentUserId !== userId)
    .filter((item) => item.transaction.sharingUserId === "");

  //Set the callback state that is passed by parameter
  setCallBack(dataFiltered);
};
