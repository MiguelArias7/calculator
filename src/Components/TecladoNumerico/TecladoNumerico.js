import React from "react";
import "./TecladoNumerico.css";
import { BotonCalculadora } from "../BotonCalculador/BotonCalculadora";

function TecladoNumerico({ updateCalculo }) {
  let nums = [];
  for (let i = 1; i < 10; i++) {
    nums.push(i);
  }
  nums.push(0);
  return (
    <div className="TecladoNumerico">
      {nums.map((num) => (
        <BotonCalculadora
          onClickFunction={() => {
            updateCalculo(num.toString());
          }}
          key={num}
          valor={num}
        ></BotonCalculadora>
      ))}
    </div>
  );
}

export { TecladoNumerico };
