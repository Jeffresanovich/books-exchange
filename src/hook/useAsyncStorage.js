import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserIdFromStorage = async (userId) => {
  let userIdFromStorage = null;
  try {
    await AsyncStorage.setItem("userIdFromStorage", userId);
    console.log("ID de usuario guardado con éxito."); //DELETE CONSOLE LOG
    userIdFromStorage = "Successful save";
  } catch (error) {
    console.error("Error saving user: ", error);
  }
  return userIdFromStorage;
};

export const getUserIdFromStorage = async (setUserId = null) => {
  let userIdFromStorage = null;
  try {
    userIdFromStorage = await AsyncStorage.getItem("userIdFromStorage");
    if (userIdFromStorage !== null) {
      console.log("ID de usuario recuperado:", userId); //DELETE CONSOLE LOG
      if (setUserId) setUserId(userIdFromStorage);
    } else {
      console.log("No se encontró un ID de usuario almacenado."); //DELETE CONSOLE LOG
    }
  } catch (error) {
    console.error("Error getting user: ", error);
  }

  return userIdFromStorage;
};

export const removeUserIdFromStorage = async () => {
  let userIdFromStorage = null;
  try {
    await AsyncStorage.removeItem("userIdFromStorage");
    console.log("ID de usuario eliminado con éxito."); //DELETE CONSOLE LOG
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
  return userIdFromStorage;
};
