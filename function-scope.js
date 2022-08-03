// Function scope

function saludar () {
  let username = 'Ameth'
  console.log(username)

  if (username === 'Ameth') {
    console.log(`Hola ${username}!`)
  }
}

saludar()
console.log(username) // username is not defined
