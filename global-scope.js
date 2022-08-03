// variables

var a // declarando
var b = 'b' // declaramos y asignamos
b = 'bb' // reasignación
var a = 'aa' // redeclaración

// Global scope
/*
Cualquier variable que se encuentre en el documento pasan a ser variables globales, y se instancían dentro del objeto window.
*/

var fruit = 'Apple' //global

function bestFruit () {
  console.log(fruit)
}

bestFruit()

// Debemos tener cuidado en no asignar una variable sin declararla, pues automáticamente se declara como global scope
function countries () {
  country = 'Colombia' //Estamos asignando la variable sin declararla, por lo que se va al global scope
  console.log(country)
}

countries()
console.log(country)
