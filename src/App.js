import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      let evaluated = eval(expression);

      if (evaluated === Infinity) {
        setResult("Infinity");
      } else if (isNaN(evaluated)) {
        setResult("NaN");
      } else {
        setResult(evaluated);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={expression}
        readOnly
        style={{ width: "100px", textAlign: "center", marginBottom: "10px" }}
      />
      <div>{result}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 50px)",
          gap: "5px",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((buttonValue) => (
          <button
            key={buttonValue}
            onClick={() =>
              buttonValue === "="
                ? handleEqual()
                : buttonValue === "C"
                ? handleClear()
                : handleClick(buttonValue)
            }
            style={{ width: "50px", height: "50px" }}
          >
            {buttonValue}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
