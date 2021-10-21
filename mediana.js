const lista1 = [
    2,
    100,
    200,
    500,
    4000,
    5000,
    1,
    10000
];

let listaOrden = lista1;
let j = 0;
let k = 0;

// Ordena la lista de menor a mayor
do {
    for (let i = 0; i < listaOrden.length; i++) {
        if (listaOrden[k] < listaOrden[i]) {
            j = listaOrden[k];
            listaOrden[k] = listaOrden[i];
            listaOrden[i] = j;
            i = 0;
        } else if (i === listaOrden.length - 1) {
            k++;
        }
    }
} while (k < listaOrden.length);


// Calcula la mediana
const mitadLista1 = parseInt(lista1.length / 2);

function esPar (numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    mediana = (lista1[mitadLista1 - 1] + lista1[mitadLista1]) / 2;
} else {
    mediana = lista1[mitadLista1];
}
