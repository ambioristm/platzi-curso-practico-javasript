//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscounts = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con desuento es de: $" + precioConDescuento;
}

//console.log({
    //precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento,
//})