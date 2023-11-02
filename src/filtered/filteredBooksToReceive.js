export const filteredBooksToReceive = (allBooks, userId, setCallBack) => {
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
