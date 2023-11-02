import convertDataResponse from "./convertDataResponse";

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
