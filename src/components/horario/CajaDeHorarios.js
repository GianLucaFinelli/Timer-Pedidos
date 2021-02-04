import React from "react";

import Horario from "./Horario";

export default function CajaDeHorarios({horarios,setHorarios,cajas,setCajas}) {
  var cajaDeHorarios = horarios.map((hora, indice) => {
    return (
      <Horario
        horario={hora}
        key={indice}
        setHorarios={setHorarios}
        horarios={horarios}
        cajas={cajas}
        setCajas={setCajas}
      ></Horario>
    );
  });
  
  return <React.Fragment>{cajaDeHorarios}</React.Fragment>;
}
