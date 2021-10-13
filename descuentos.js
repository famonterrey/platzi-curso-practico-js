const precioOriginal = 100;
const descuento = 15;

const cupones = [
    "cupon 1",
    "cupon 2",
    "cupon 3"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function PriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const PrecioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: " + PrecioConDescuento;
}


