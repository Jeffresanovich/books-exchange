//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";

export const handleOpenCam = async (setImage) => {
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
      await setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  }
};

export const handleOpenGalery = async (setImage) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [3, 4],
    quality: 1,
    base64: true,
  });
  if (!result.canceled) {
    await setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
  }
};
