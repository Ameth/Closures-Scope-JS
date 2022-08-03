//Reasignación de variables

/*  var */

// Declaramos
var firstName // Undefined

// Asignamos
firstName = 'Ameth'
console.log(firstName)

// Asignamos y declaramos, luego reasignamos
var lastName = 'Ordoñez'
lastName = 'Erazo'
console.log(lastName)

// Declaración, luego redeclaración y reasignación
var secondName = 'Gabriel'
var secondName = 'Miguel'
console.log(secondName)

/*  let */

let fruit = 'Apple' // Declarar y asignar
fruit = 'Kiwi' // Reasignar
console.log(fruit)

// let fruit="Banana"; // No se puede volver a declarar la variable con ámbito de bloque

/*  const */

const animal = 'Dog' // Declarar y asignar
// animal = 'Lion' // No se puede volver a asignar un valor a una variable const
// const animal = 'Aguila' // No se puede volver a declarar la variable con ámbito de bloque
console.log(animal)

// Se puede agregar valores a la referencia en una variable const
const vehiculos = []
vehiculos.push('🚗')
vehiculos.push('✈')
vehiculos.push('🚍')
console.log(vehiculos)

vehiculos.pop()
console.log(vehiculos)
