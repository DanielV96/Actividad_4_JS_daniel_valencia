/* Distribuidora de huevos */

console.warn('Punto 5 JS')

let huevos = prompt('¿Qué tipo de huevos desea adquirir? 1."A" o 2."AA"')

let cantidadHuevos = parseInt(prompt('¿Cuál es la cantidad de huevos que desea llevar?'))

if ( huevos = 1 && cantidadHuevos < 101 ) {

    alert(`El precio total es ${(220 * cantidadHuevos)}`)
}

if ( huevos = 1 && cantidadHuevos > 100 && cantidadHuevos < 201 )  {

    alert(`El precio total es ${(220 * cantidadHuevos) / 0.05}`)
}

if ( huevos = 1 && cantidadHuevos > 201 && cantidadHuevos < 301  ) {

    alert(`El precio total es ${(220 * cantidadHUevos) / 0.08}`)
}

if (huevos = 1 && cantidadHuevos >= 301) {
    
    alert(`El precio total es ${(220 * cantidadHuevos) / 0.10}`)
}

if ( huevos = 2 && cantidadHuevos < 101)  {
    alert(`El precio total es ${(250 * cantidadHuevos)}`)
}

if( huevos = 2 && cantidadHuevos > 100 && cantidadHuevos < 201)
 {
    alert(`El precio total es ${(250 * cantidadHuevos) / 0.05}`)
}

if ( huevos = 2 && cantidadHuevos > 201 && cantidadHuevos < 301)
 {
    alert(`El precio total es ${(250 * cantidadHUevos) / 0.08}`)
}

if ( huevos = 2 && cantidadHuevos >= 301 ) {

    alert(`El precio total es ${( 250 * cantidadHuevos)/ 0.10}`)
}