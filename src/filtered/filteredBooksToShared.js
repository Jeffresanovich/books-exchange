import convertDataResponse from "./convertDataResponse";

export const filteredBooksToShared = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
  //Filtra, quitando los que ya tiene el usuario
  const filteredCurrentUserId = allBooks.filter(
    (item) => item.transaction.currentUserId !== userId
  );

  const filteredBySharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === ""
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
