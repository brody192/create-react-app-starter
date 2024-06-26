export const Enums = {
  Login: [
    { errorCode: "auth/invalid-email", message: "Email invalido" },
    {
      errorCode: "auth/wrong-password",
      message: "Usuário ou senha invalida",
    },
    { errorCode: "auth/user-not-found", message: "Email não encontrado" },
  ],
  SingIn: [
    { errorCode: "auth/invalid-email", message: "Email inválido" },
    {
      errorCode: "auth/weak-password",
      message: "A senha deve ter ao menos 6 caracteres",
    },
    {
      errorCode: "auth/email-already-in-use",
      message: "O email já está em uso",
    },
  ],
};
