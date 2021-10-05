// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado*lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

function alturaIso(lado, base) {
    const a = Math.pow((base / 2), 2);
    const c = Math.pow(lado, 2);
    const b = Math.sqrt(c - a);
    return b;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

const PI = Math.PI ;

function diametroCirculo(radio) {
    return radio*2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return PI * radio * radio;
}

console.groupEnd();


// Aquí intereactuamos con Html
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("LadoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("LadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Trinagulo
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("Lado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("Lado2Triangulo").value);
    const base = parseInt(document.getElementById("BaseTriangulo").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = parseInt(document.getElementById("Lado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("Lado2Triangulo").value);
    const base = parseInt(document.getElementById("BaseTriangulo").value);
    const altura = parseInt(document.getElementById("AlturaTriangulo").value);
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularAlturaTriangulo() {
    const lado1 = parseInt(document.getElementById("Lado1TrianguloIso").value);
    const lado2 = parseInt(document.getElementById("Lado2TrianguloIso").value);
    const base = parseInt(document.getElementById("BaseTrianguloIso").value);

    if (lado1 === lado2) {
        const altura = alturaIso(lado1, base);
        alert(altura);
    }   else {
        alert("No es isósceles")
    } 
}

// Circulo
function calcularPerimetroCirculo() {
    const radio = parseInt(document.getElementById("RadioCirculo").value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = parseInt(document.getElementById("RadioCirculo").value);
    const area = areaCirculo(radio);
    alert(area);
}