// Arrays -> son listas, buena practica es que todos los elementos de la lista sea del mismo tipo
let total = 0;
let pokemon = 0;
let vuelto = 0;
const usuario = [];
const carrito = [];
const productos = [
    { id: 1, nombre: 'Leche mu-mu', precio: 100 },
    { id: 2, nombre: 'Antiquemar', precio: 200 },
    { id: 3, nombre: 'Anticongelar', precio: 300 }
]





////////////////////////////////////////////////////// Creo el usuario
function crearUsuario(nombre, monedas, pokemon) {
    alert('Hola! Bienvenidx al Centro Pokemon 👩‍⚕️🔴. \nAntes de empezar, necesitamos registrarte en el sistema. 👩‍💻')
    nombre = prompt('Entrenadorx, cual es tu nombre? 🕶');
    monedas = parseInt(prompt('Con cuántas monedas disponés ahora mismo ? 💰 '));
    pokemon = parseInt(prompt('Qué starter te elegiste? \n 1. Charmander🔥 \n 2. Bulbasur🍃 \n 3. Squirtle🌊 '));

    const persona = { nombre: nombre, monedas: monedas, pokemon: pokemon }
    usuario.push(nombre);
    usuario.push(monedas);
    usuario.push(pokemon);


}
crearUsuario();





/////////////////////////////////////////// Agrego producto al carrito
function agregarProducto() {
    let opcion = parseInt(prompt('Elija qué producto desea comprar el dia de hoy.👩‍⚕️🔴 \n 1. Leche mu-mu ($100)🥛 \n 2. Antiquemar ($200)🩹  \n 3. Anticongelar ($300)❄  \n 4.Finalizar la compra'));

    while (opcion !== 4) {

        switch (opcion) {
            case 1:
                carrito.push(productos[0]);

                break

            case 2:
                carrito.push(productos[1]);

                break

            case 3:
                carrito.push(productos[2]);

                break

            default:
                alert('opcion incorrecta')

        }
        opcion = parseInt(prompt('Elija qué producto desea comprar el dia de hoy.👩‍⚕️🔴 \n 1. Leche mu-mu ($100)🥛 \n 2. Antiquemar ($200)🩹  \n 3. Anticongelar ($300)❄  \n 4.Finalizar la compra'));

    }

}

agregarProducto();

/////////////////////////////// Sumo el total de la compra 

function sumarCompra() {
    console.log(carrito);

    let precioTotal = [];
    for (const producto of carrito) { // imprime los productos y muestra su id y su nombre. Recorre el array de principio a fin.
        precioTotal.push(parseInt(producto.precio));

    }
    for (const precio of precioTotal) {
        total += precio;
    }


}
sumarCompra();

///////////////////////////////////// cancelo la compra
function cancelarCompra() {
    let monedasDisponibles = usuario[1]
    vuelto = monedasDisponibles - total;

    alert("🌈Gracias por su compra! el total de monedas disponibles es $ " + monedasDisponibles + " y precio final a abonar es $" + total) + " 🌈";

    validarCompra()
}

cancelarCompra();

//////////////////////////////////////// valido la compra

function validarCompra() {
    if (vuelto < 0) {
        alert('No tenés monedas suficientes!😢🤷‍♀️')
        usuario[1] = parseInt(prompt("Por favor, vuelva a setear el numero de monedas disponibles en su cuenta😎"));
        cancelarCompra();

    } else {
        alert("La operacion ha sido realizada con éxito! 🎉 \n Su vuelto es: $" + vuelto)
        crearTicket();
    }
}


crearTicket();





//////////////////////////// Muesto el ticket.

function crearTicket() {
    let nombreUsuario = usuario[0];
    let ticket = [];
    let poke = usuario[2];
    for (const producto of carrito) {
        ticket.push(" item: " + producto.nombre + " $ " + producto.precio + "\n");


    }


    switch (poke) {
        case 1:
            ticket.push(" 🔥 GIFT ESPECIAL STARTER FUEGO: piedra fuego");
            break;
        case 2:
            ticket.push(" 🍃 GIFT ESPECIAL STARTER HOJA: piedra hoja");
        default:
            break;

        case 3:
            ticket.push(" 🌊 GIFT ESPECIAL STARTER AGUA: piedra agua ")
            break
    }

    const mostrar = ticket => {
        alert('Hola, ' + nombreUsuario + ' gracias por tu compra! Acá te dejamos el detalle: \n ' + ticket + "\n TOTAL ABONADO -------- \n $" + total + "\n VUELTO--------\n  $" + vuelto);
    }
  
    mostrar(ticket);



}




