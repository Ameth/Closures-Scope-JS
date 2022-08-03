// Block scope

function fruits () {
  if (true) {
    var fruit1 = 'Apple' // function scope
    let fruit2 = 'Kiwi' // block scope
    const fruit3 = 'Banana' // block scope
  }
  console.log(fruit1)
  //   console.log(fruit2)
  //   console.log(fruit3)
}

fruits()
// console.log(fruit1); //No se declara como global scope
