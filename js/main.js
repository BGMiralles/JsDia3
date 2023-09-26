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

// function factorial(fact){
//     var x = 1
//     var fact = parseInt(prompt("Dame un numero"))
//     for (var i = 1; i <= fact; i++){
//         x *= i
//     }
//     console.log(x);
// }
// factorial()

//Ejercicio 5

// function binario(float1){
//     var float1 = parseFloat(prompt("Dame un numero, puede tener decimales"))
//     var bin = ""
//     while(float1 / 2  !== 1){
//         bin = float1 / 2 
//     }
//     console.log(bin);
// }
// binario()

//Ejercicio 6 

// var num1 = parseInt(prompt("Dame un numero"))
// console.log(num1);
// function cifras(num1){
//     var numst = num1.toString()
//     console.log(numst);
//     console.log(numst.length);
// }
// cifras(num1)    

//Ejercicio 7

// var wallet = prompt("Dime una cantidad de dinero y la moneda (libras, dolares o yenes) separado por ',' sin espacios" )
// var moneda = wallet.split(",")[1]
// console.log(moneda);
// function cambio(moneda){
//     switch(moneda){
//         case 'libras':
//             console.log("0.86 libras es 1 €");
//             break
//         case 'dolares':
//             console.log("1.28611 $ es un 1 €");
//             break
//         case 'yenes':
//             console.log("129.852 yenes es un 1 €");
//             break
//         default:
//             console.log("No has rellenado bien los campos");
//             break
//     }
// }

// cambio(moneda)

//Ejercio 8

// var num = []
// for (let i = 0; i < 10; i++) {
//     num.push(prompt("Dime un numero"))
//     console.log(`Indice = ${i}, valor = ${num[i]} `);
// }

// var x = prompt("Dime que valor quieres cambiar")
// var y = prompt("Dime que posicion del indice queires modificar")
// function rellenar(valor, indice){
//     num[y] = x
// }

// function mostrar(indice){
//     console.log(`Indice = ${y}, valor = ${num[y]}`);
// }

// rellenar(x, y)
// mostrar(y)
// console.log(num);

//Ejercicio 9

let arrNum = []
let lenArr = parseInt(prompt("Cuantos numeros quieres que tenga el array, en numero entero"))

function rellenarArr(lenArr){
    for (let i = 0; i < lenArr; i++) 
        arrNum.push((Math.random() * 9)) 
    }

function mostrarArr(arr){
    for( let i = 0; i < lenArr; i++){
        console.log(`${arrNum[i]}`)
    }
}

function sumarArr(arr){
    
}

rellenarArr(lenArr)
mostrarArr(arrNum)
// console.log(arrNum);