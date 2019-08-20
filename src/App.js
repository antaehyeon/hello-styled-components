import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Button danger>DANGER</Button>
      <Button success>SUCCESS</Button>
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

export default App;
