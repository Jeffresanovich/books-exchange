import AsyncStorage from "@react-native-async-storage/async-storage";

//Receives a userId param and saves it in storage
export const saveUserIdFromStorage = async (userId) => {
  let userIdFromStorage = null;
  try {
    await AsyncStorage.setItem("userIdFromStorage", userId);
    //console.log("ID de usuario guardado con éxito."); //DELETE CONSOLE LOG
    userIdFromStorage = true;
  } catch (error) {
    console.error("Error saving user: ", error);
  }
  return userIdFromStorage;
};

//Returns a user Id or allows saving the user in a callback function
export const getUserIdFromStorage = async (setUserId = null) => {
  let userIdFromStorage = null;
  try {
    userIdFromStorage = await AsyncStorage.getItem("userIdFromStorage");
    if (userIdFromStorage !== null) {
      //console.log("ID de usuario recuperado."); //DELETE CONSOLE LOG
      if (setUserId) setUserId(userIdFromStorage);
    } else {
      //console.log("No se encontró un ID de usuario almacenado."); //DELETE CONSOLE LOG
    }
  } catch (error) {
    console.error("Error getting user: ", error);
  }

  return userIdFromStorage;
};

//Remove the user from storage and return true if the operation was successful
export const removeUserIdFromStorage = async () => {
  let userIdFromStorage = null;
  try {
    await AsyncStorage.removeItem("userIdFromStorage");
    userIdFromStorage = true;
    //console.log("ID de usuario eliminado con éxito."); //DELETE CONSOLE LOG
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
  return userIdFromStorage;
};
