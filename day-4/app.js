'use strict';
console.log(`Welcome To Javascript Webinar Day 04`);

// Array
let myArr = [10, 20, 15, true, 'hello'];
console.log(myArr);
for (let index = 0; index < myArr.length; index++) {
  console.log('index and value', index, myArr[index]);
}
console.clear();

console.log(myArr);
myArr.forEach((item, index, myArrRef) => {
  console.log(`item -> ${item}\t index -> ${index}, myArrRef -> ${myArrRef}`);
  console.log('\nitem -> ' + item + ' index -> ' + index);
});

console.clear();
for (const item of myArr) {
  console.log('item :>> ', item);
}
console.log('myArr :>> ', myArr);
console.clear();

const EMAILS = new Array();
EMAILS.push('support@teckat.com');
console.log('EMAILS :>> ', EMAILS);
console.clear();

// set
const EMAILS_SET = new Set();
EMAILS_SET.add('support@teckat.com');
console.log('EMAILS_SET :>> ', EMAILS_SET);
console.clear();

// object
const STUDENTS = new Object();
STUDENTS.name = 'santosh';
STUDENTS.age = 30;
STUDENTS.class = 10;
console.log('STUDENTS :>> ', STUDENTS);

let myObj = { name: 'teckat', id: 123 };
console.log('myObj :>> ', myObj);

for (const key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(`key -> ${key}\t ${myObj[key]}`);
  }
}
console.clear();

// map
const STUDENT_MAP = new Map();
STUDENT_MAP.set(('name', 'santosh'));
STUDENT_MAP.set(true, 123);
STUDENT_MAP.set(56, true);
console.log('STUDENT_MAP :>> ', STUDENT_MAP);
