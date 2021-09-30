// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Lados del cuadrado miden " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTriángulo1 = 5;
const ladoTriángulo2 = 6;
const baseTriángulo = 4;
const alturaTriángulo = 5.5;

console.log("Lados del triángulo miden " + ladoTriángulo1 + " cm, " + ladoTriángulo2 + " cm, " + baseTriángulo + " cm");

console.log("La altura del triángulo es " + alturaTriángulo + " cm");

const perimetroTriangulo = ladoTriángulo1 + ladoTriángulo2 + baseTriángulo;
console.log("El perímetro del triángulo es " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriángulo * alturaTriángulo)/2;
console.log("El área del triángulo es " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");
const radioCírculo = 4;
const diametroCírculo = radioCírculo * 2;
const PI = Math.PI ;
const perímetroCírculo = diametroCírculo*PI;
const areaCírculo = PI*radioCírculo*radioCírculo;

console.log("El radio del círculo es " + radioCírculo + " cm");

console.log("El diámetro del círculo es " + diametroCírculo + " cm");

console.log("PI es " + PI);

console.log("El perímetro del círculo es " + perímetroCírculo + " cm");

console.log("El área del círculo es " + areaCírculo + " cm^2");


console.groupEnd();
