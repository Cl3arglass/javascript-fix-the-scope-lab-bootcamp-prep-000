var animal = 'cat'

function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
const two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
<<<<<<< HEAD
    return "FUNKY!"}

}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
=======
    return "FUNKY!"
  }


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()}
>>>>>>> 7296e93fa95714eab02333fb6bd4e3d283402de0
