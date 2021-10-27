//Helpers
function esPar(Numero) {
    return (Numero % 2 === 0);
}

const salariosCol = colombia.map(
    function (element) {
        return element.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

//Calculadora de mediana
function medianaSalariosCol (Lista) {
    const mitad = parseInt(Lista.length / 2);
    if (esPar(Lista.length)) {
        const personaMitad1 = Lista[mitad - 1];
        const personaMitad2 = Lista[mitad];
        const personaMitad = (personaMitad1 + personaMitad2) / 2;
        return personaMitad;
    } else {
        const personaMitad = Lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//Mediana TOP 10%
const spliceStar = (salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStar;
const salariosColTop10 = salariosColSorted.splice(spliceStar, spliceCount);
const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
    medianaGeneralCol, 
    medianaTop10Col
});