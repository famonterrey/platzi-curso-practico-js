const notas = [
    {
        curso: "Matemáticas",
        nota: 7,
        credito: 10
    },
    {
        curso: "Ciencia",
        nota: 5,
        credito: 5
    },
    {
        curso: "Lenguaje",
        nota: 4,
        credito: 2
    }
];


const notaConCredito = notas.map(
    function (notaObjeto) {
        return notaObjeto.credito * notaObjeto.nota;
    }
);


const sumaNotaConCredito = notaConCredito.reduce(
    function (suma = 0, nuevoValor) {
        return suma + nuevoValor;
    }
);

const Credito = notas.map(
    function (Objetocredito) {
        return Objetocredito.credito;
    }
);

const sumaCredito = Credito.reduce(
    function (suma=0, nuevoValor) {
        return suma + nuevoValor;
    }
);

const promedioP = sumaNotaConCredito / sumaCredito;