export const filteredBooksToShared = (allBooks, userId, setCallBack) => {
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

//console.log("FILTRO LIBROS: ", JSON.stringify(filteredSharingUserId, null, " "));
