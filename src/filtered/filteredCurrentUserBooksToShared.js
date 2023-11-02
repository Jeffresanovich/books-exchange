export const filteredCurrentUserBooksToShared = (
  allBooks,
  userId,
  setCallBack
) => {
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId === userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === ""
  );
  /*
  console.log("FILTRO USUARIO ALTUAL: " + userId);
  console.log(
    "FILTRO USUARIO ACTUAL COMPARTIENDO: ",
    JSON.stringify(filteredCurrentUserId, null, " ")
  );
*/
  //Setea el estado que se pase por parametro
  setCallBack(filteredBySharingUserId);
};
