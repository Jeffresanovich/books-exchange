/**
 * This custom hook slice the data (object) from firebase and the firebase key
 * then save then together in a new object returned an array.
 * @param {Object} data Data (object) like response from realtime database.
 * @returns Return an array
 */
const useConvertDataResponse = (data) => {
  const convertArray = [];
  for (const key in data) {
    convertArray.push({ ...data[key], key });
  }
  return convertArray;
};

export default useConvertDataResponse;
