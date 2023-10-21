export default useConvertDataResponse = (data, setStateCallback) => {
  const finalArray = [];
  for (const key in data) {
    finalArray.push({ ...data[key], key });
  }
  setStateCallback(finalArray);
};
