'use strict';
console.log(`Welcome To Javascript Webinar Day 07`);

// eslint-disable-next-line no-unused-vars
async function onSubmit() {
  // * collect form reference
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const button = document.querySelector('#btn');

  // * disable the submit button
  button.setAttribute('disabled', true);

  // * get data
  const $ = {
    name: name.value?.trim(),
    email: email.value?.trim().toLowerCase(),
    message: message.value?.trim(),
  };
  console.log('$ :>> ', $);

  // * validate the data
  let error = false;
  if ($.name === '') {
    name.style.borderColor = 'red';
    error = true;
  }

  if ($.message === '') {
    error = true;
    message.style.borderColor = 'red';
  }

  if (error) {
    alert(`Invalid Data Entered`);
  }

  // TODO: send the data into server using fetch api
  fetch('');

  // TODO: handle api response

  // TODO: show proper info. to user

  // * enable the submit button
  setTimeout(() => {
    button.removeAttribute('disabled');
  }, 2500);
}
