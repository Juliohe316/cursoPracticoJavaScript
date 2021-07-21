// codigo del cuadrado
console.group("cuadrados")
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden" + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

// console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

// console.log("El area cuadrada es: " + areaCuadrado + "cm^2");
console.groupEnd();
// codigo del Triangulo
console.group("Triandulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: "
//     + ladoTriangulo1 
//     + "cm, "+ladoTriangulo2+" cm, "
//     + baseTriangulo + "cm");
    
// const alturaTriangulo = 5.5;

// console.log("La altura de mi triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base*altura)/2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm");

console.groupEnd();
// codigo del circulo
console.group("Circulos")
//radio
// const radioCirculo = 4;
// console.log("el radio del circulo es: " + radioCirculo);
//diametro
function diametroCirculo(radio){
    return radio * 2;

}
// console.log("el diametro del circulo es: " + diametroCirculo);
//PI
// const PI = Math.PI;
// console.log("PI es: " + PI);

//circunferencia
function perimetroCirculo(diametro){
    return diametro * Math.PI;

}


// console.log("el perimetro del circulo es: " + perimetroCirculo);

//area

function areaCirculo(radio) {
    return (radio * radio)*Math.PI;

}
// console.log("el area del circulo es: " + areaCirculo);
console.groupEnd()