function ID() {
    return parseInt(Math.random() * 1000000)
}

function agregarLibros() {
    let id = ID()
    let descripcion = prompt("Descripción del nuevo libro que nos recomienda:").toUpperCase()
    let importe = parseFloat(prompt("Importe (sin IVA):"))

    encargado.push(new Plantilla(id, descripcion, importe))
    console.table(encargado)
}

function generarCarrito() {
    carrito.push(new Plantilla(1234, "bhagavad gita", 29950))
    carrito.push(new Plantilla(2345, "Corán", 249900))
    carrito.push(new Plantilla(3456, "bardo thodol", 199949))
}

function calcularCarrito() {
    debugger
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, 0)
    console.log("total a pagar: $", total)
}