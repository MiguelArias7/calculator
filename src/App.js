import "./App.css";
import React from "react";
import { BarraResultado } from "./BarraResultado";
import { TecladoNumerico } from "./TecladoNumerico";
import { TecladoOperaciones } from "./TecladoOperaciones";

function App() {
  let ops = ["+", "-", "*", "/", "."];
  let opsExtra = ["DEL", "="];
  const [calculo, setCalculo] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  const updateCalculo = (valor) => {
    if (
      (ops.includes(valor) && resultado === "") ||
      (ops.includes(valor) && ops.includes(calculo.slice(-1)))
    ) {
      return;
    }
    setCalculo(calculo + valor);

    if (!ops.includes(valor)) {
      setResultado(eval(calculo + valor).toString());
    }
  };

  const updateResultado = () => {
    setCalculo(eval(calculo).toString());
  };

  const resetValores = () => {
    if (calculo === "") return;
    setCalculo(calculo.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculadora">
        <BarraResultado
          resultado={resultado}
          calculo={calculo}
        ></BarraResultado>
        <TecladoOperaciones
          ops={ops}
          opsExtra={opsExtra}
          updateCalculo={updateCalculo}
          updateResultado={updateResultado}
          resetValores={resetValores}
        ></TecladoOperaciones>
        <TecladoNumerico updateCalculo={updateCalculo}></TecladoNumerico>
      </div>
    </div>
  );
}

export default App;
