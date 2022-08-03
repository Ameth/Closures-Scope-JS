// Implementación sin closures, no recuerda el valor guardado.
function alcancia (monedas) {
  let totalGuardado = 0
  totalGuardado += monedas
  console.log(`Total guardado: $${totalGuardado}`)
}

alcancia(500) // Total guardado: $500
alcancia(100) // Total guardado: $100

// Implementación con closures, recuerda el ámbito lexico cuando la función fue creada

function miAlcancia () {
  let totalGuardado = 0

  function contarMonedas (monedas) {
    totalGuardado += monedas
    // La función va a recordar siempre a la variable 'totalGuardado', que siempre va a ser la misma
    // por lo que ahora si se puede utilizar para almacenar la suma
    console.log(`Total guardado: $${totalGuardado}`)
  }

  // Se retorna la función, que esta amarrada a la variable totalGuardado
  return contarMonedas
}

const ahorro = miAlcancia()

ahorro(500) // Total guardado: $500
ahorro(100) // Total guardado: $600
ahorro(200) // Total guardado: $800

// Cada instancia de la función me retorna una función nueva con un nuevo ámbito lexico
const ahorroAna = miAlcancia()

ahorroAna(1000)
ahorroAna(300)
