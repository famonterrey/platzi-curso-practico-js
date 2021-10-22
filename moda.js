const Lista1 = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const Lista1Count = {};

Lista1.map(
    function(elemento){
        if(Lista1Count[elemento]) {
            Lista1Count[elemento] += 1;
        } else {
            Lista1Count[elemento] = 1;
        }
    }
);

const Lista1Array = Object.entries(Lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = Lista1Array[Lista1Array.length - 1];