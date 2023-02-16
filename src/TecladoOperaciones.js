import React from "react";
import "./TecladoOperaciones.css";
import { BotonCalculadora } from "./BotonCalculadora";

function TecladoOperaciones({
  ops,
  opsExtra,
  updateCalculo,
  updateResultado,
  resetValores,
}) {
  return (
    <div className="TecladoOperaciones">
      {ops.map((op) => (
        <BotonCalculadora
          key={op}
          valor={op}
          onClickFunction={() => {
            updateCalculo(op.toString());
          }}
        ></BotonCalculadora>
      ))}
      {
        <BotonCalculadora
          key={opsExtra[0]}
          valor={opsExtra[0]}
          onClickFunction={() => {
            resetValores();
          }}
        ></BotonCalculadora>
      }
      {
        <BotonCalculadora
          key={opsExtra[1]}
          valor={opsExtra[1]}
          onClickFunction={() => {
            updateResultado();
          }}
        ></BotonCalculadora>
      }
    </div>
  );
}

export { TecladoOperaciones };
