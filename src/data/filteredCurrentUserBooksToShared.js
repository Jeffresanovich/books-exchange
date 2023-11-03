import convertDataResponse from "./convertDataResponse";

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
