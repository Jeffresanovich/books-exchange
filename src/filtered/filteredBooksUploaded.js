export const filteredBooksUploaded = (allBooks, userId, setCallBack) => {
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

//console.log("FILTRO USUARIO ALTUAL: " + userId);
//console.log("FILTRO LIBROS: ", JSON.stringify(filteredSharingUserId, null, " "));
