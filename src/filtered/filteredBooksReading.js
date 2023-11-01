export const filteredBooksReading = (allBooks, userId, setCallBack) => {
  const filteredByCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId === userId
  );
  const filteredBySharingUserId = filteredByCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === userId
  );

  console.log("FILTRO USUARIO ALTUAL: " + userId);
  console.log(
    "BOOK READING: ",
    JSON.stringify(filteredByCurrentUserId, null, " ")
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};
