import { getDatabase, ref, onChildChanged } from "firebase/database";

export const listenChildEvents = () => {
  const db = getDatabase();
  const commentsRef = ref(db, "/books");
  onChildChanged(commentsRef, () => {
    console.log("ELEMENTO CAMBIADO");
  });
};
