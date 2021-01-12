/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import Calculator from "./components/Calculator";

export default (props) => {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  );
};
