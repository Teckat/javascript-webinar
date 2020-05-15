'use strict';
console.log(`Welcome To Javascript Webinar Day 06`);

/**
 * Client     <-> (REST API)   <->  Server <-> DB
 * http protocol -> method
 * GET -> get the data from server R
 * POST -> create new record C
 * PUT -> update the record U
 * DELETE -> delete the records D
 * CURD
 */

const USER_API = `https://jsonplaceholder.typicode.com/users`;

(async () => {
  const length = document.getElementById('length');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const companyName = document.getElementById('companyName');
  console.log('length :>> ', length);
  let users = await fetch(USER_API);
  users = await users.json();
  console.log('users :>> ', users);

  length.innerText = users.length;
  name.innerText = users[0].name;
  companyName.innerText = users[0].company.name;
  email.innerText = users[0].email;
})();
