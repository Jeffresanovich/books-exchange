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

export const filteredBooksReading = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const filteredByCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId === userId
  );
  const filteredBySharingUserId = filteredByCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === userId
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};

export const filteredBooksToDeliver = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId === userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId !== userId
  );
  const filteredBySharingUserIdEmpty = filteredBySharingUserId.filter(
    (item) => item.transaction.sharingUserId !== ""
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserIdEmpty);
};

export const filteredBooksToReceive = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  //Filtra, quitando los que ya tiene el usuario
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId !== userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === userId
  );

  const filteredBySharingUserIdEmpty = filteredBySharingUserId.filter(
    (item) => item.transaction.sharingUserId !== ""
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserIdEmpty);
};

export const filteredBooksToShared = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  //Filtra, quitando los que ya tiene el usuario
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId !== userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === ""
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};

export const filteredBooksUploaded = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const filteredByOwnerUserId = allBooks.filter(
    (item) => item.book_data.ownerUserId === userId
  );
  const filteredByCurrentUserId = filteredByOwnerUserId.filter(
    (item) => item.transaction.currentUserId === userId
  );
  const filteredBySharingUserId = filteredByCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === userId
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};

export const filteredCurrentUserBooksToShared = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId === userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === ""
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};

export const filteredSharingBooksByTitle = (
  data,
  title,
  userId,
  setCallBack
) => {
  const allBooks = convertDataResponse(data);
  //Filtra por title
  const filterByTitle = allBooks.filter((item) =>
    item.book_data.title.toLowerCase().startsWith(title.toLowerCase())
  );

  //Filtra quitando los que ya tiene el usuario
  const filteredCurrentUserId = filterByTitle.filter(
    (item) => item.transaction.currentUserId !== userId
  );

  //Filtra los que estan disponibles (no estan pedidos por nadie)
  const filteredSharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === ""
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredSharingUserId);
};
