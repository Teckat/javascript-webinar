'use strict';
console.log(`Welcome To Javascript Webinar Day 09`);

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
    return;
  }

  // *send the data into server using fetch api
  let res = await fetch('http://localhost:8080/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify($),
  });

  res = await res.json();

  // handle api response
  if (res.status) {
    name.value = '';
    message.value = '';
    email.value = '';
    alert(res.data);
  } else {
    console.error($.error);
    alert(res.error || 'Something Went Wrong');
  }
  // * enable the submit button
  button.removeAttribute('disabled');
}
