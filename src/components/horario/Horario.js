import React from "react";
import {SeleccionarCaja} from './HorariosHelper.js';

export default function Horario({
  horario,
  setHorarios,
  horarios,
  cajas,
  setCajas,
}) {
  var Seleccionar = () => {
    return SeleccionarCaja(horario,horarios,setHorarios,cajas,setCajas);
  };

  return (
    <div className="horario" id={horario.id}>
        <div className="horario__elemento-contenedor">
          <span className="mr-2">Horario:</span>
          {horario.hora}
        </div>
        <div className="horario__elemento-contenedor">
          <span className="mr-2">Ocupado:</span>
          <span>{horario.activo ? "Si" : "No"}</span>
        </div>
      <div className="horario__elemento-contenedor mt-2">
        <button
          className={
            !horario.activo
              ? "btn btn-outline-success mr-2 w-100"
              : "btn btn-outline-danger mr-2 w-100"
          }
          onClick={Seleccionar}
        >
          {!horario.activo ? "Seleccionar" : "Quitar"}
        </button>
      </div>
    </div>
  );
}
