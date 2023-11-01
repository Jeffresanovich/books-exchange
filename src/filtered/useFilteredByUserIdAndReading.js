export const useFilteredByUserIdAndReading = (
  allBooks,
  userId,
  setCallBack
) => {
  //Filtra solo los que tiene el usuario
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId === userId
  );
  //Filtra por usuario actual que aun NO lo pone disposicion para compartir
  const filteredSharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === userId
  );

  //Setea el estado que se pase por parametro
  setCallBack(filteredSharingUserId);
};

//console.log("FILTRO USUARIO ALTUAL: " + userId);
//console.log("FILTRO LIBROS: ", JSON.stringify(filteredSharingUserId, null, " "));
