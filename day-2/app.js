'use strict';
console.log(`Welcome To Javascript Webinar Day 02`);

/**
 * ***************************************************************
 * * Operators
 * ***************************************************************
 */

// 1. &&

/**
 *  true && true = true
 *  otherwise
 *  false
 */

// 2. ||

/**
 *  false || false = false
 *  otherwise
 *  true
 */

// 3. !

/**
 *  !true = false
 *  !false = true
 */

/**
 * ***************************************************************
 * * Data Types
 * ***************************************************************
 */

// primitive and non primitive data type

/**
 * * primitive
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. null
 * 5. undefined
 *
 * * non primitive data types
 * 1. Array
 * 2. object
 *
 */

let myNumber = 56;
let myName = 'santosh';
let status = true;
let studentDetails = null;
let myErr = undefined;
console.log('myNumber', myNumber, typeof myNumber);
console.log('myName', myName, typeof myName);
console.log('status', status, typeof status);
console.log('studentDetails', studentDetails, typeof studentDetails);
console.log('myErr', myErr, typeof myErr);

/**
 * ***************************************************************
 * * io function in javascript
 * ***************************************************************
 */

// alert
function logout() {
  console.log('you are log out');
  /**
   * * your logic
   */
}

// alert('Now Your Log out');
logout();

// confirm
// eslint-disable-next-line no-unused-vars
function checkCountry() {
  const isIndian = confirm(`are you indian`);
  console.log('isIndian', isIndian);
  const countryStatus = document.querySelector('#countryStatus');
  console.log(countryStatus);

  let msg = '';
  if (isIndian) {
    msg = `<span style="color: green;">awesome</span>`;
  } else {
    msg = '<span style="color: red;">not awesome</span>';
  }
  countryStatus.innerHTML = msg;
}

// prompt
// eslint-disable-next-line no-unused-vars
function getMyFavoriteColor() {
  const myFavoriteColor = prompt('Enter your favorite color', 'black');
  console.info(myFavoriteColor);
}

/**
 * ***************************************************************
 * * Control statements
 * ***************************************************************
 */

// if
// if (confirm('check me')) {
//   // do this
//   console.log(`i am getting true response`);
// }

// if else

// if (confirm('check me')) {
//   // do this
//   console.log(`i am getting true response`);
// } else {
//   console.log(`i am getting false response`);
// }

// else if
// if (confirm('confirm me')) {
//   // do this
//   console.log(`confirm by user`);
// } else if (confirm('try again')) {
//   console.log(`confirm by user during try again`);
// } else {
//   console.log(`not confirmed`);
// }

// switch case

// eslint-disable-next-line no-unused-vars
function testSwitchCase() {
  // const number = parseInt(prompt(`Enter Your Favorite Number`, '0'), 10);
  const numberString = prompt(`Enter Your Favorite Number`, '0');
  const number = +numberString;

  switch (number) {
    case 0:
      console.log(`default 0`);
      break;

    case 1:
      console.log(`1`);
      break;

    case 2:
      console.log(`2`);
      break;

    default:
      console.log('you have enter', numberString);
      break;
  }
}

/**
 * ***************************************************************
 * * Operator
 * ***************************************************************
 */

// tertiary operator
const isOkay = confirm(`Is okay`) ? 'yes' : 'No';
console.log(isOkay);
