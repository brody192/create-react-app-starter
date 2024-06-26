import React, { useContext, useState } from "react";
import { Container, Form, Title, Button, SubTitle } from "./styles";

import { deleteUser } from "firebase/auth";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import AuthContext from "../../context/Auth";

const AccountSettings = () => {
  const { user, logout } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = () => {
    setIsLoading(true);

    deleteUser(user)
      .then(() => {
        console.log("Successfully deleted user");
        logout();
      })
      .catch((error) => {
        console.log("Error deleting user:", error);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Container>
      <Form>
        <Title>Deseja realmente excluir sua conta?</Title>
        <SubTitle id="modal-modal-title" variant="h6" component="h2">
          Essa operação não poderá ser desfeita
        </SubTitle>
        <Button onClick={() => handleRemove()}>Confirmar</Button>
      </Form>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default AccountSettings;
