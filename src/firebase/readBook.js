import { useEffect, useState } from "react";

import { useGetAllBooksQuery } from "../services/bookApi";

import { getDatabase, ref, onValue } from "firebase/database";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setAllBooks, setIsLoading } from "../redux/slice/bookSlice";

const readBook = () => {
  const dispatch = useDispatch();
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  const finalArray = [];
  for (const key in data) {
    finalArray.push({ ...data[key], key });
  }

  useEffect(() => {
    dispatch(setAllBooks(finalArray));
    dispatch(setIsLoading(isLoading));
  }, []);

  /*
  const db = getDatabase();
  const starCountRef = ref(db, "books");
  onValue(starCountRef, () => {
    dispatch(setAllBooks(finalArray));
    dispatch(setIsLoading(isLoading));

    console.log("SE HIZO UNA MODIFICACION");
  });
  */
};
export default readBook;
