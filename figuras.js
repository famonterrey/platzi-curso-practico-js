// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado^2;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

const PI = Math.PI ;

function diametroCirculo(radio) {
    return radio*2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCírculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return PI * radio^2;
}

console.groupEnd();
