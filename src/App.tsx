import React, { useState } from "react";
import axios from "axios";
import "./styles/style.css";

function App() {
  const [result, setResult] = useState();
  const [squareOneValue, setSquareOneValue] = useState<string>();
  const [quareTwoValue, setSquareTwoValue] = useState<string>();

  const getResult = () => {
    axios
      .post(`http://localhost:5000/calculator`, {
        square_one: squareOneValue,
        square_two: quareTwoValue,
      })
      .then((response) => {
        setResult(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="content-images">
        <img
          src="https://i.ibb.co/zFvbCLP/pythagoras.png"
          alt="Pythagoras_Image"
          id="cartoon-image"
        />
      </div>
      <div className="content">
        <span>
          O Teorema de Pitágoras: <br />
          Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos
          quadrados dos catetos.
        </span>
        <div className="input-value">
          <label>Cateto 1:</label>
          <input
            type="text"
            name="square_one"
            onChange={(e) => {
              setSquareOneValue(e.target.value);
            }}
          />
        </div>

        <div className="input-value">
          <label>Cateto 2:</label>
          <input
            type="text"
            name="square_two"
            onChange={(e) => {
              setSquareTwoValue(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            getResult();
          }}
        >
          Calcular
        </button>
        {result && (
          <div className="result-value">
            {result > 0 ? "Hipotenusa: " : null}
            <span> {result} </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
