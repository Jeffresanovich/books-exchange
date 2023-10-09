export const errorMessage = (error) => {
  let message = "";
  switch (error) {
    case "Firebase: Error (auth/invalid-email).":
      message = "Email o contraseña invalido";
      break;
    case "Firebase: Error (auth/invalid-password).":
      message = "Email o contraseña invalido";
      break;
    case "Firebase: Error (auth/invalid-login-credentials).":
      message = "Email o contraseña invalido";
      break;
    case "Firebase: Error (auth/missing-password).":
      message = "Ingrese la contraseña";
      break;
    case "Firebase: Error (auth/too-many-requests).":
      message = "Muchos intents fallidos, intente mas tarde";
      break;
    case "campo-obligatorio":
      message = "Complete todos los campos";
      break;

    default:
      message = "Error inesperado, intente mas tarde";
      break;
  }

  return message;
};
