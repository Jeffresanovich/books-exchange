/**
 * This custom hook get the data (object) from firebase, add the firebase key
 * and save then in a new object.
 * Then save the new object (data with firebase key) in an array state callback.
 * @param {Object} data Data (object) like response from realtime database.
 * @param {Function} setStateCallback callBack where the convert info is saved.
 */
const useConvertDataResponse = (data, setStateCallback) => {
  const finalArray = [];
  for (const key in data) {
    finalArray.push({ ...data[key], key });
  }
  setStateCallback(finalArray);
};

export default useConvertDataResponse;
