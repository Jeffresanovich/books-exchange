const errors = [
  {
    error: "Firebase: Error (auth/invalid-email).",
    message: "Email o contraseña invalido",
  },
  {
    error: "Firebase: Error (auth/invalid-email)ddddddd",
    message: "Email no disponible",
  },
  {
    error: "auth/internal-error",
    message: "Error inesperado, intente mas tarde",
  },
  { error: "auth/invalid-password", message: "Email o contraseña invalido" },
  {
    error: "auth/too-many-requests",
    message: "A superado e maximo de intentos",
  },
  { error: "campo-obligatorio", message: "Campo obligatorio" },
];

export const errorMessage = (errorFirebase) => {
  const [{ message }] = errors.filter((e) => e.error === errorFirebase);

  return message;
};
