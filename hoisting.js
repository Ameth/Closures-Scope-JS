/*

Se hace hoisting a las variables declaradas con var y a las funciones declaradas como functions

var nameOfDog; // undefined
var name; // undefined

function nombrePerro() {...}

*/

console.log(nameOfDog) // undefined
var nameOfDog = 'Elmo'

console.log(nameOfDog) // Elmo

nombrePerro() // El nombre del perro es undefined

function nombrePerro () {
  console.log(`El nombre del perro es ${name}`)
}

var name = 'Elmo'
nombrePerro() // El nombre del perro es Elmo
