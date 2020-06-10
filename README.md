# Intitialsizer

### Introduction

This app will solve a string-related problem: what are the user's initials and how long is their name?

I didn't say it was an important problem...

From a code perspective, we'll be using two inputs now (the user's first name and last name). Additionally, we'll have to do some string manipulation instead of math - concatenation, indices, and the `length` property.


### Guidelines

* Although you may make extra functions if it helps, the one function asked for is an absolute requirement.
* `nodemon` is a great tool, but make sure that you're passing in arguments. If you enter `nodemon main.js` as a command, it will continuously run `node main.js` without arguments. If you enter `nodemon main.js Colin Jaffe` as a command, it will continuously run `node main.js Colin Jaffe`, with arguments `Colin` and `Jaffe`. If you want different arguments, you'll have to quit (Control-C) and run `nodemon` with different arguments.


### Workflow

* You'll fork and clone this repository.
* You'll be working in `main.js`.
* For now, we'll eschew manual testing and just skip straight to manual testing. To try your app out, write `node main.js` followed by a first name and a last name.
* You'll know you're done when the following inputs give their respective outputs:

`node main.js Colin Jaffe` -> 'Hey, C.J. Mind if I call you that? Your full name is 10 letters long!'

`node main.js Mesuara Kaleziq` -> 'Hey, M.K. Mind if I call you that? Your full name is 14 letters long!'

`node main.js Alexander Hamilton` -> 'Hey, A.H. Mind if I call you that? Your full name is 17 letters long!'


### Steps

##### 1. Call `getInput` TWICE to get the first name and the last name. See the extensive comments in `main.js` on how to use this pre-written helper function. Store the return values in variables.

##### 2. Create a function to get initials. It should take in two strings (a first name and a last name) and return one string with initials. Manually test it with the following inputs:

'Colin', 'Jaffe' -> 'C.J.'

'Mesuara', 'Kaleziq' -> 'M.K.'

'Alexander', 'Hamilton' -> 'A.H.'


##### 3. Call that function, passing in the user's inputs from step 1. Store the result in a variable.

##### 4. Calculate the combined length of the first name and the second name. For example, for 'Colin' and 'Jaffe', we should get 10. Store that in another variable.

##### 5. Create a message that follows the format from the output outlined in the Workflow section. Store that message string in a variable.

##### 5. Pass that string into `console.log` to print out your result.

##### 6. Test your app by calling it with `node`/`nodemon`.

##### 7. Celebrate your accomplishment!
