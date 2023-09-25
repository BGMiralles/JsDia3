// KATA DNI

// function letraDNI(numeroDni){
//     var numeroDni = parseInt(prompt("Dime los numeros de tu DNI"))
//     var letra = numeroDni % 23
//     const letras = "TRWAGMYFPDXBNJZSQVHLCKET".split("");

//     return letras[letra]
// }

// console.log(letraDNI());

//Ejercicio 1

// var figura = prompt("Dime si es un cuadrado, circulo o triangulo")

// if(figura === "cuadrado"){
//     var lado = parseInt(prompt("Dime el lado del cuadrado"))
//             console.log(lado * lado);
// }else if(figura === "circulo"){
//     var radio = parseInt(prompt("Dime el radio del circulo"))
//             console.log((radio ** 2) * Math.PI)
// }else if(figura === "triangulo"){
//     var base = parseInt(prompt("Dime la base del triangulo"))
//             var altura = parseInt(prompt("Dime la altura del triangulo"))
//             console.log((base * altura) / 2)
// }

//Ejercicio 3

// function numeroPrimo(num1){
//     var num1 = parseInt(prompt("Dame un numero"))
//     if(num1 / num1 === 1 & num1 / 1 === num1){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
    

// }

// numeroPrimo()

//Ejercicio 4

function factorial(fact){
    var x = 1
    var fact = parseInt(prompt("Dame un numero"))
    for (var i = 1; i <= fact; i++){
        x *= i
    }
    console.log(x);
}
factorial()