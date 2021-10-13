const precioOriginal = 100;
const descuento = 15;

const cupones = [
    {
        name:"cupon 1",
        descuento: 15, 
    },
    {
        name:"cupon 2",
        descuento: 30, 
    },
    {
        name:"cupon 3",
        descuento: 50, 
    },
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function PriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputCupon = document.getElementById("InputCupon").value;

    const CuponValido = function(cupones) {
        const validador = cupones.name === inputCupon;
        return validador; 
    };
    
    const userCupon = cupones.find(CuponValido);

    if (!userCupon) {
        alert ("El cupón " + inputCupon + " no existe");
    } else {
        const descuento = userCupon.descuento;
        const PrecioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
        const ResultP = document.getElementById("ResultP");
        ResultP.innerText = "El precio con descuento es: " + PrecioConDescuento;
    }
}


