import React, { Fragment } from "react";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      {/* <button className="button button--success">SUCCESS</button>
      <button className="button button--danger">DANGER</button> */}
      <Button danger />
      <Button />
    </Fragment>
  );
};

const Button = ({ danger = false }) => (
  <button className={danger ? "button button--danger" : "button button--success"}>{danger ? "DANGER" : "SUCCESS"}</button>
);

export default App;
