import convertDataResponse from "./convertDataResponse";

export const filteredSharingBooksByTitle = (
  data,
  title,
  userId,
  setCallBack
) => {
  const allBooks = convertDataResponse(data);
  //Filtra por title
  const filterByTitle = allBooks.filter((item) =>
    item.book_data.title.toLowerCase().startsWith(title.toLowerCase())
  );

  //Filtra quitando los que ya tiene el usuario
  const filteredCurrentUserId = filterByTitle.filter(
    (item) => item.transaction.currentUserId !== userId
  );

  //Filtra los que estan disponibles (no estan pedidos por nadie)
  const filteredSharingUserId = filteredCurrentUserId.filter(
    (item) => item.transaction.sharingUserId === ""
  );
  /*
  console.log("FILTRO USUARIO ALTUAL: " + userId);
  console.log(
    "FILTRO POR TITULO: ",
    JSON.stringify(filteredSharingUserId, null, " ")
  );
*/
  //Setea el estado que se pase por parametro
  setCallBack(filteredSharingUserId);
};
