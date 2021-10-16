function calcularMediaAritmetica(lista) {
    // let suma = 0;
    // let contador = 0;

    //  for (let i of lista1) {
    //     suma = suma + i;
    //     contador++;
    // }

    // for (let i = 0; i < lista.length; i++) {
    //     suma = suma + lista[i];
    // }

    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = suma / lista.length;
    return promedio;
}


