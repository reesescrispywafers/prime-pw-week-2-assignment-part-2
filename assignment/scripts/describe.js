// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//
// We create (using the let command) a string variable called "name".
// We then give a value to the string variable with the "=" sign. The value is the string 'Dane'
//We then create a conditional statement that checks if the variable name is exactly equal to the string 'Mary'
// If it is, we console log the string 'Hi, Mary!'
// If name is not equal to the string 'Mary, we console log 'How do you do?'
// 'Dane' is not exactly equal to 'Mary', so we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//
// We create the variable 'secret', but do not assign it a value
// We create the number variable 'code' and assign it the numerical value of 123
// We check to see if the variable 'code' is exactly equal to 123, and if it is,
// We assign the value 'super' to the variable 'secret', and multiple the value of 'code'. Code is now equal to 246.
// THEN we check if the new value of the variable 'code' is greater than 250, and if it is we will assign the string value 'duper' to the variable 'secret', and we will console log the value of 'secret', which is 'duper'.
// Unfortunately, code is equal to 246 and is not greater than 250, so we will not be logging 'duper' to the console.

//CODE
/*
let secret
;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//
// We create the boolean variable 'isStudent' and set it equal to true
// We create the number variable 'age' and set it equal is 34
// We create the number variable 'zip' and set it equal to 55407
// We then create a conditional statement that checks if 'ifstudent' is exactly equal to true and 'zip' has a numerical value greater than 80000, in which case we will console log 'You are a student on the West Coast!'
// If both of those conditions are not met and we do not log 'You are a student on the West Coast!', we then check the next conditional which checks if 'isStudent' is exactly equal to 'false' OR 'age' has a numerical value less than 30.
// If one of these cases is true, we will then log 'What are your hobbies?'
// If neither of those conditions are met, we then check the next conditional which checks if 'isStudent' has a value exactly equal to true.
// If it does, we will console log 'Welcome to Prime!'
// If none of the conditions are met, we will console log 'How about the weather?'

// isStudent is exactly equal to true, so we will log 'Welcome to Prime!' in the console

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - The value of colorOne is supposed to be set equal to 'blue', not 'red'.
// The value of colorTwo is supposed to be set equal to 'red', but it is set to 'blue'.

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - If the value of mix is true, both colorOne and colorTwo should be set to purple. Here only colorOne is set to purple. add colorTwo = 'purple'; in the curly brackets
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!

/*
let temp = 40;
const time = 4;

// FIX - the conditonal is set to check if temp is set to 39 OR time is greater than or equal to 4. It should be set to check if temp is set to 39 AND time is greater than or equal to 4, using && in place of ||
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - We set the conditional to check if minAge is less than or equal to age, and if it's true we log 'no entry'. If that statement is fale, then we console log 'enter'.
// We need to change the conditional to just check if age is greater than or equal to minAge instead, and to then log 'enter'. No additonal conditionals needed.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
