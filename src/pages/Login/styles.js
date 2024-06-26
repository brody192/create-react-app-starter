import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.foreground};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: "GeneralSans", sans-serif;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.button};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.foreground};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: "GeneralSans", sans-serif;
  margin-bottom: 20px;
`;
