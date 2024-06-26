import React, { useState, useContext, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import AuthContext from "../../context/Auth";
import { Enums } from "../../utils/authEnum";

import {
  Container,
  Button,
  Form,
  Input,
  Title,
  SubTitle,
  ErrorText,
} from "./styles";

const Login = () => {
  const { signIn, auth } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    errorCode: "",
    errorMessage: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  async function handleLogin() {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        const { user } = userCredential;

        signIn(user);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        setError({ errorCode: errorCode, errorMessage: errorMessage });
        setHasError(true);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (hasError) {
      const message = Enums.Login.find(
        (item) => item.errorCode === error?.errorCode
      );
      setErrorMessage(message?.message || "Ops, ocorreu um erro!");
    }
  }, [hasError]);

  return (
    <Container>
      <Form onSubmit={() => {}}>
        <Title>PetLife Casa de ração</Title>
        <SubTitle>
          Para solicitar a exclusão de conta faça o login.
        </SubTitle>

        <div>
          <Input
            type="text"
            placeholder="Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ margin: "auto " }}>
          <Button disabled={isLoading} onClick={() => handleLogin()}>
            {isLoading ? "Carregando..." : "Entrar"}
          </Button>
        </div>

        {setHasError && <ErrorText>{errorMessage}</ErrorText>}
      </Form>
    </Container>
  );
};

export default Login;
