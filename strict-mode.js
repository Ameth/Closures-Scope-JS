/* 
'strict mode' fue implementado en ESC-5 y nos permite ejecutar de forma estricta unas reglas particulares 
para tener mucho mejor control de la asignaciòn de las variables y algunos elementos claves para que nuestro 
código cumpla con el mayor de los estandares
*/

'use strict'

pi = 3.1416
console.log(pi) // pi is not defined

// 'strict mode' se puede usar en el ámbito de una función
function myFuncion () {
  'use strict'
  return (pi = 3.1416)
}

console.log(myFuncion()) // pi is not defined
