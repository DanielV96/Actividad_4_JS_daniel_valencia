// calculadora

console.warn('Punto 4 JS')

let num1 = prompt("Ingrese primer número")

num1 = parseInt(num1)

let num2=prompt("Ingrese segundo número")
num2= parseInt(num2)

let suma = num1 + num2

let resta = num1 - num2

let multiplicacion = num1  *num2

let dividir = num1 / num2

let proceso = parseInt(prompt('Ingrese la operación que desea 1.sumar, 2.restar, 3.multiplicar, 4.dividir'))

if (proceso === 1) {

    alert(`la suma es ${suma}`)

} 

if (proceso === 2) {
    alert(`la resta es ${resta}`)
} 

if (proceso === 3) {
    alert(`la multiplicacion es ${multiplicacion}`)
} 

if (proceso === 4) {
    alert(`la division es  ${dividir}`)
} 

else {
    console.error('Ingrese una operación válida')
}