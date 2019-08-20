import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Button danger>DANGER</Button>
      <Button success>SUCCESS</Button>
      <Anchor href="http://google.com">Go to google</Anchor>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ecf0f1;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 180px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  $:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#c0392b" : "#1abc9c")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
