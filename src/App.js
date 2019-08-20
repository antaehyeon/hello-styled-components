import React from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({ required: true })`
  width: 200px;
  border: none;
  ${awesomeCard}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${awesomeCard}
  background-color: #ecf0f1;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Input placeholder="please input text" />
    </Container>
  );
};

export default App;
