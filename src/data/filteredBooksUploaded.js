import convertDataResponse from "./convertDataResponse";

export const filteredBooksUploaded = (data, userId, setCallBack) => {
  const allBooks = convertDataResponse(data);
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
