const myGlobal = 0

function myFuncion () {
  const num = 1
  console.log(myGlobal)

  function parent () {
    // funcion interna
    const inner = 2
    console.log(num, myGlobal)

    function child () {
      console.log(inner, num, myGlobal)
    }

    return child()
  }

  return parent()
}

myFuncion()

function saludar () {
  let userName = 'Ameth'

  function mostrarNombre () {
    return `Hola ${userName}`
  }

  return mostrarNombre
}

const miSaludo = saludar()

console.log(miSaludo)
console.log(miSaludo())
