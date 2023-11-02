export const filteredBooksToReceive = (allBooks, userId, setCallBack) => {
  //Filtra, quitando los que ya tiene el usuario
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId !== userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === userId
  );
  /*
  console.log(
    "BOOK TO SHARING: ",
    JSON.stringify(filteredBySharingUserId, null, " ")
  );
  console.log("FILTRO USUARIO ALTUAL: " + userId);
*/
  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};
