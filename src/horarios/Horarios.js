export default function Horarios(iteraciones,horaComienzo,id) {

    var arreglo = [];
    for(var i = 0 ; i < iteraciones ; i++){
        var esPar = (i % 2 == 0);
        arreglo.push({
            id: id,
            hora: `${horaComienzo}:${ esPar ? "00" : "30"}`,
            activo: false
        });
        id++;
        if(!esPar) horaComienzo++;
    }

    return arreglo;
}
