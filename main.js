/*******************************************************************************
 * Your code here!
 ******************************************************************************/
// Get both user(their first and last name) inputs.
let firstName = getInput(0);
let lastName = getInput(1) 

// Get initials of both inputs and combine them.
function init(first, last){
  return first[0] + '.' + last[0] + '.';
}
// Storing the initial into a variable named init.
let initials = init(firstName, lastName)

// Calculate the combined length of both inputs into a variable.
let nameLength = firstName.length + lastName.length;

// Making variable that reads the message in the workflow output.
let output = 'Hey, ' + initials + ' Mind if I call you that? Your full name is ' + nameLength + ' letters long!'

// Passing the message to a console.log
console.log(output)


/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
