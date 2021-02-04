import React from "react";

export default function Horario({
  horario,
  setHorarios,
  horarios,
  cajas,
  setCajas,
}) {
  var Seleccionar = () => {
    var HorariosConfirmados;
    if (cajas > 0) {
      HorariosConfirmados = horarios.map((h) => {
        if (h.id == horario.id) {
          h.activo = horario.activo ? false : true;
          if (cajas != 0) {
            if (h.activo) {
              cajas--;
              setCajas(cajas);
            } else {
              cajas++;
              setCajas(cajas);
            }
          }
        }
        return h;
      });
    } else if (cajas == 0) {
      HorariosConfirmados = horarios.map((h) => {
        if (h.id == horario.id) {
          if (h.activo) {
            cajas++;
            setCajas(cajas);
            h.activo = false;
          }
        }
        return h;
      });
    }
    var HorariosConfirmados = horarios;
    setHorarios(HorariosConfirmados);
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
