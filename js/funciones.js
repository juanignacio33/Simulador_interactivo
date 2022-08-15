
function generadorAutomatico() {
    libros.push(new Plantilla(1234, "los 11 pasos", 29950))
    libros.push(new Plantilla(2345, "padre rico", 249900))
    libros.push(new Plantilla(3456, "y soles lloveran", 199949))
    libros.push(new Plantilla(4567, "el otro camino", 219890))
    libros.push(new Plantilla(5678, "lluvia seca", 409090))
    libros.push(new Plantilla(6789, "la solucion es js", 459000))
    console.table(libros)
}

function recorrerElementos() {
    debugger
    for (let Plantilla of libros)
        console.table(Plantilla)
}

function buscarProducto() {
    let prod = prompt("por favor nombre el libro que le intereza de la lista ")

    const resultado = libros.filter((elemento) => {
        return elemento.nombre == prod
    })
    console.table(resultado)
}

let buscar = prompt("por favor nombre el libro que le intereza de la lista ")

function filtrarProductos() {
    let prod = prompt("ingresa el termino a buscar ")
    debugger
    const resultado = productos.filter(elemento => elemento.nombre.includes(prod))
    console.table(resultado)
}

function existeLibros() {
    let codigo = prompt("ingrese el codigo del libro:")
    const resultado = libros.some(Plantilla => Plantilla.id === parseInt(codigo))
    console.log("existe resultado?", resultado)
    if (resultado == true) {
        alert("si lo tenemos!!!")

    } else {
        alert("no tenemos ese libroo")
    }
}

function proyeccionIncremento(porc) {
    let resultado = productos.map(producto => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion: producto.importe * porc
        }
    })
    console.table(resultado)
}