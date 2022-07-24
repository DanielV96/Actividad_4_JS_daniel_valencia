/* porcentaje de hombres y porcentaje 
de mujeres en un grupo de estudiantes */

console.warn('Punto 3 JS')

let Hombres = parseInt(prompt (`Ingrese la cantidad de hombres`))
let Mujeres = parseInt(prompt(`Ingrese la cantidad de mujeres`))

const cantidadTotal = Hombres + Mujeres

Hombres = (( Hombres * 100) / cantidadTotal)
Mujeres = (( Mujeres * 100)/ cantidadTotal)
    

alert(`el porcentaje de hombres es de ${Math.round(Hombres)}% y
el porcentaje de mujeres es de ${Math.round(Mujeres)}%`)





