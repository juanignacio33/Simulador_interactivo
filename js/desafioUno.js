let nombre = prompt("Buenos Dias! estas de suerte , pero de la Buena! cual es tu nombre? ")
    alert("bienvenido " + nombre + "!!!")
    console.log(" un credito de cuanto quiere conseguir ?maximo es $300,000", nombre)
let prestamo = parseInt(prompt(nombre + ", usted un credito de cuanto $$$ quiere conseguir ?maximo es $300,000"))


if (prestamo < 1000) {
    console.error("no alcanza ,pide  mas!")
    alert(nombre + " no alcanza ,pide  mas!")
}
else if (prestamo < 10000) {
    console.warn("vamos yo se que quieres  mas ")
    alert(nombre + " vamos yo se que quieres  mas ")

}
else if (prestamo >= 30000) {
    console.log("puess tiene buena pinta, trato hecho!!!")
    alert("puess tiene buena pinta, trato hecho " + nombre + "!!!")
}
else {
    console.warn("no se otorga el credito")
    alert("no se otorga el credito")
}

let interez = 1.43
let ope = "+"
let cuotas = parseInt(prompt("En  cuanta cantidad de cuotas lo va a querer ?"))
    console.log("su plan de pago por mes es", calculo(prestamo, interez, cuotas, ope))

function calculo(num1, num2, num3, ope) {
    switch (ope) {
        case "+":
            return num1 * num2 / num3

    }
}


confirm(nombre + "las cuotas por mes seran " + calculo(prestamo, interez, cuotas, ope))


let masGrande = prompt("si usted requiere un credito mayor a  $500,000, por favor diga Si, de lo contrario ,  no")
if (masGrande == "si") {
    console.log("Perfecto! digame el monto mayor!")
    alert("Perfecto! digame el monto mayor!")

}
else {
    console.warn("no se otorga el credito")
    alert("no se otorga el credito " + nombre)


}
let crediMayor = parseInt(prompt(nombre + " un credito de cuanto $$$ quiere conseguir ?maximo es $3,000,000"))

let masCuotas = parseInt(prompt("En  cuanta cantidad de cuotas lo va a querer ?"))
    console.log("su plan de pago por mes es", calculo(crediMayor, interez, masCuotas, ope))
    confirm("su plan de pago por mes es" + calculo(crediMayor, interez, masCuotas, ope))



