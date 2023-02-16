import React from "react";
import "./BarraResultado.css";

function BarraResultado({ resultado, calculo }) {
  return (
    <React.Fragment>
      <div className="BarraResultado">
        {resultado ? <span> ({resultado}) </span> : ""} {calculo || "0"}
      </div>
    </React.Fragment>
  );
}

export { BarraResultado };
