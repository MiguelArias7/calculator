import React from "react";
import "./BotonCalculadora.css";

function BotonCalculadora({ valor, onClickFunction }) {
  return (
    <button onClick={onClickFunction} className="BotonCalculadora">
      {valor}
    </button>
  );
}

export { BotonCalculadora };
