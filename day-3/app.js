'use strict';
console.log(`Welcome To Javascript Webinar Day 03`);

// 1. iteration or loop

// for loop
let index = 0;
const upTo = 10;

// index = 10  ; 10 < 10 => false
for (index; index < upTo; index = index + 1) {
  // to your task
  console.log('index =>', index); // 01 .... 9
}
console.clear();

// while loop
let number = 1;
while (number < upTo) {
  // to your task
  console.log('number =>', number);

  number = number + 2;
}

console.clear();

// do while loop

let count = 5;

do {
  // write our logic
  console.log(`count =>`, count); // 5
  count = count + 5;
} while (count < 5); // 10  < 10 => false

// forEach loop

// when array

// for of loop

// when array

// for in loop

// object

// 2. functions or reusable business logic

// task 1 -> send otp
// name function
function SendOtp(mobile, otp = 5656) {
  console.log(`otp Send on:- `, mobile, otp);
  /**
   * * your logic
   */
}

SendOtp('7788006653', 9999);

// task 2 -> send email
// anonymous function
const sendEmail = function (email) {
  console.log(`email Send on:- `, email);
};

sendEmail('support@teckat.com');

// task 3 -> validate user JWT Token
// arrow function
let validate = (token) => {
  console.log(`your token is: - `, token);
};

validate('f4g5sww52a5');

// registration
SendOtp('7788006653', 9999);

// login
SendOtp('7788006653', 9999);

// forgot password
SendOtp('7788006653', 9999);

function test(success, data, error, info) {
  console.log('success', success);
  console.log('data', data);
  console.log('error', error);
  console.log('info', info);
}

function parent(num, email, callback) {
  console.log('num', num);
  console.log('email', email);
  return callback(true, { name: 'teckat' }, null, 'example for callback');
}

parent(56, 'example#demo.com', test);
