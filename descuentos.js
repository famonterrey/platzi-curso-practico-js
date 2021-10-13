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
    const inputCupon = document.getElementById("InputCupon").value;

    let descuento;

    if (!cupones.includes(inputCupon)) {
        alert ("El cupón " + inputCupon + " no existe");
    } else if (inputCupon == "cupon 1") {
        descuento = 15;
    } else if (inputCupon == "cupon 2") {
        descuento = 30;
    } else if (inputCupon == "cupon 3") {
        descuento = 50;
    }

    const PrecioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: " + PrecioConDescuento;
}


