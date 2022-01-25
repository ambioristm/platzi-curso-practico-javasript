//codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return  lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return  lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd;

//codigo del triangulo isosceles
console.group("Triangulo Isosceles");

function alturaTriangulo(ladoA, ladoB, ladoBase) {
    return ladoA + ladoB + ladoBase;
}
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        console.log("Los lados a y b son iguales")
    }
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cmˆ2");
console.groupEnd;

//codigo del triangulo
console.group("Triangulo");

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cmˆ2");
console.groupEnd;

//codigo del circulo
console.group("Circulo");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es de: " + radioCirculo + "cm");


//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es igual a: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");

//Area
function areaCirulo(radio) {
    return (radio * radio) * PI;
}
//const areaCirulo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es de: " + areaCirulo + "cmˆ2");

console.groupEnd;

//aqui interactuamos con HTML
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}