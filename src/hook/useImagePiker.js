//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const openCam = async (setImage = null) => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    Alert.alert(
      "ATENCION!",
      "La app no tiene permiso para acceder a la camara"
    );
    return;
  } else {
    const result = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!result.canceled) {
      if (setImage)
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      return result.assets[0].base64;
    }
  }
};

export const openGalery = async (setImage = null) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [3, 4],
    quality: 1,
    base64: true,
  });
  if (!result.canceled) {
    if (setImage) setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    return result.assets[0].base64;
  }
};
