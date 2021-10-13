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

    switch(inputCupon) {
        case cupones[0]: //cupon 1
            descuento = 15;
        break;
        case cupones[1]: //cupon 2
            descuento = 30;
        break;
        case cupones[2]: //cupon 3
            descuento = 50;
        break;
    }

    const PrecioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: " + PrecioConDescuento;
}


