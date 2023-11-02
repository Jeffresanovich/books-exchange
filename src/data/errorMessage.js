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

    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      message = "La contraseña debe tener mas de 6 caracteres";
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
