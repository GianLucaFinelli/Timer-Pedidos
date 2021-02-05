import React from "react";
import { SeleccionarCaja } from "./HorariosHelper.js";

export default function Horario({
  horario,
  setHorarios,
  horarios,
  cajas,
  setCajas,
}) {
  var Seleccionar = () => {
    return SeleccionarCaja(horario, horarios, setHorarios, cajas, setCajas);
  };

  return (
    <div className="horario" id={horario.id}>
      <span className="horario-titulo text-dark">
        <i class="bi bi-stopwatch-fill mr-2"></i>
        {horario.hora}
      </span>
      {!horario.activo ? (
        <button className="btn--horario text-success" onClick={Seleccionar}>
          <i className="bi bi-box-arrow-in-right"></i> Seleccionar
        </button>
      ) : (
        <button className="btn--horario text-danger" onClick={Seleccionar}>
          <i className="bi bi-box-arrow-left"></i> Quitar
        </button>
      )}
    </div>
  );
}
