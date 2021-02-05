import React, { useState } from "react";
import Horarios from "./horarios/Horarios";

// import Caja from "./components/caja/Caja";
import CajaDeHorarios from "./components/horario/CajaDeHorarios";

export default function App() {
  const [cajas, setCajas] = useState(8);
  const [horarios, setHorarios] = useState(Horarios(25, 8,0));

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="col-sm-12 col-md-9 vh-100 bg-grey">
        <div className="caja-de-horarios">
          <CajaDeHorarios
            horarios={horarios}
            setHorarios={setHorarios}
            cajas={cajas}
            setCajas={setCajas}
          ></CajaDeHorarios>
        </div>
      </div>
      <div className="col-sm-12 col-md-3 ml-0 pl-0 vh-100 bg-secondary">
        <div className="cantidad-cajas">
          <div className="cantidad-cajas--titulo">Cantidad de cajas:</div>
          <span className="cantidad-cajas--items">{cajas}</span>
        </div>
      </div>
    </div>
  );
}
