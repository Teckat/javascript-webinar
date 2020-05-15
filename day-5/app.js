'use strict';
console.log(`Welcome To Javascript Webinar Day 05`);

const DATA = {
  status: true,
  data: {
    lang: 'javascript',
    students: [
      {
        name: 'sam',
        favColor: 'black',
      },
      {
        name: 'john',
        favColor: 'blue',
      },
    ],
    getFullName: function (firstName, lastName) {
      return firstName + ' ' + lastName;
    },
  },
  page: 1,
  limit: 25,
};
console.log('DATA :>> ', DATA);
const DATA_STR = JSON.stringify(DATA);
console.log('DATA_STR :>> ', DATA_STR);
console.clear();

// fetch('http://127.0.0.1:5500/day-5/app.json').then((res) => {
//   res.json().then((res) => {
//     console.log('res :>> ', res);
//   });
// });

// console.clear();
// fetch('http://127.0.0.1:5500/day-5/app.txt').then((res) => {
//   res.text().then((res) => {
//     console.log('res :>> ', res);
//   });
// });
// console.clear();

// console.log(`start step -> 1`);
// fetch('https://reqres.in/api/users?page=1')
//   .then((res) => {
//     console.log(`success step -> 2`);
//     console.log('res :>> ', res);
//   })
//   .catch((err) => {
//     console.log(`error step -> 2`);
//     console.error(err);
//   })
//   .finally(() => {
//     console.log(`finally step -> 3`);
//     console.log(`api execution completed`);
//   });
// console.log(`end step -> 4`);

(async function api() {
  console.log(`start step -> 1`);
  try {
    let res = await fetch('https://reqres.in/api/users?page=1');
    res = await res.json();
    console.log(`success step -> 2`);
    console.log('res :>> ', res);
    // throw new Error('my custom error');
  } catch (err) {
    console.log(`error step -> 2`);
    console.error(err);
  }
  console.log(`end step -> 4`);
  console.clear();
})();

// function simplePromiseExample(flag, delayInMs = 1000) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (flag) {
//         resolve('successfully executed');
//       } else {
//         reject(new Error('an error occurs'));
//       }
//     }, delayInMs);
//   });
// }

// simplePromiseExample(true)
//   .then(($) => {
//     console.log('$', $);
//   })
//   .catch(($) => {
//     console.error($);
//   });

// simplePromiseExample(false, 5000)
//   .then(($) => {
//     console.log('$', $);
//   })
//   .catch(($) => {
//     console.error($);
//   });

function simplePromiseExamplePro(flag, err = false, delayInMs = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        if (err) {
          resolve({ status: err, data: 'successfully executed' });
        } else {
          resolve({ status: err, error: new Error('simple error') });
        }
      } else {
        reject(new Error('an error occurs'));
      }
    }, delayInMs);
  });
}

simplePromiseExamplePro(true, false)
  .then(($) => {
    if ($.status) console.log('data :>> ', $.data);
    else console.error($.error);
  })
  .catch(($) => {
    console.error($);
  });

/**
 * Doubts
 */

function one() {
  console.log(1);
}

function two() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      console.log(`completed`);
      resolve(true);
    }, 2500);
  });
}

function three() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      console.log(`completed`);
      resolve('three');
    }, 1000);
  });
}

function four() {
  console.log(4);
}

// (() => {
//   one();
//   two().then(($) => {
//     console.log('$ :>> ', $);
//     three().then(($) => {
//       console.log('$ :>> ', $);
//       four();
//     });
//   });
// })();

// (async () => {
//   one();
//   const $ = await two();
//   console.log('$ :>> ', $);
//   const $$ = await three();
//   console.log('$$ :>> ', $$);
//   four();
// })();
