/*7. Programa que nos diga si el numero ingresado es par o impar:
- Ventana prompt que nos solicite el ingreso del numero nuevamente en caso de que se ingrese un número inválido */

let nrosPares = []
let nrosImpares = []
let preguntaUsuario = prompt("Comenzar", "y")
let ingresoNumero

for (let i = 0; i <= 100; i += 2) {
    nrosPares.push(i)
}

for (let i = 1; i <= 100; i += 2) {
    nrosImpares.push(i)
}

while (preguntaUsuario === "y") {
    ingresoNumero = parseInt(prompt("Ingrese un número entre el 1 y el 100"))
    if(nrosPares.includes(ingresoNumero)) {
        alert(ingresoNumero + " es un número Par")
    } else if (nrosImpares.includes(ingresoNumero)) {
        alert(ingresoNumero + " es un número Impar.")
    } else {
        alert("Ingrese un número entero entre 1 y 100")
    }
    preguntaUsuario = prompt("Desea continuar ingresando números? y: Si, n: No")
}