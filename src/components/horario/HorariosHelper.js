export function SeleccionarCaja(horario, horarios,setHorarios, cajas, setCajas) {
    var HorariosConfirmados = OcuparHorarios(horarios,horario,cajas,setCajas);
    setHorarios(HorariosConfirmados);
}

function OcuparHorarios(horarios, horario, cajas,setCajas) {
    var horariosConfirmados = horarios.map((turno) => {
        if (CoindicenIds(turno.id, horario.id)) {
            if(TieneCajas(cajas)){
                if(turno.activo){
                    QuitarSeleccion(cajas,setCajas)
                    turno.activo = turnoToggle(turno.activo);
                }
            }
            else{
                turno.activo = turnoToggle(turno.activo);
                turno.activo ? PermitirSeleccion(cajas,setCajas) : QuitarSeleccion(cajas,setCajas);
            }
        }
        return turno;
    });
    return horariosConfirmados;
}

function TieneCajas(cajas){
    return cajas == 0 ? true : false;
}

function CoindicenIds(idTurno, idHorario) {
    return idTurno == idHorario ? true : false;
}

function turnoToggle(estado) {
    return !estado;
}

function QuitarSeleccion(cajas,setCajas) {
    setCajas(++cajas);
}

function PermitirSeleccion(cajas,setCajas) {
    setCajas(--cajas);
}
