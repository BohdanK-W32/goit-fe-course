'use strict';

function fetchSimpsons() {
  const API_URL = 'https://codepen.io/loomernescent/pen/LRGRaB.js';

  const addData = data => {
    const source = document.querySelector('#post-template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = template({ data });

    const container = document.querySelector('.posts');
    container.innerHTML = markup;
  };

  axios
    .get(API_URL)
    .then(({ data }) => addData(data))
    .catch(err => console.log('TCL: fetchMarvel -> err', err));
}

fetchSimpsons();

function fetchMarvel() {
  const API_URL = 'http://gateway.marvel.com:80/v1/public/characters';
  const PRIVATE = '14ee105a04fbf3ae1115f7c1f4bf06e243308356';
  const PUBLIC = '65889c1630904587be0f67dde8fc3615';
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIVATE + PUBLIC).toString();

  axios
    .get(API_URL, {
      params: {
        ts: ts,
        apikey: PUBLIC,
        hash: hash
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

fetchMarvel();

function phoneNumber() {
  const exp = /\+|\d/g;
}

function eMail() {
  const exp = /\w|\@/g;
}

function check( ) {
  const form = document.querySelector('form');
  const name = document.querySelector('[name="name"]');
  const email = document.querySelector('[name="email"]');
  const pass = document.querySelector('[name="pass"]');

  function handleSubmit(e) {
    e.preventDefault();

    const VALIDATOR = {
      name: /^[A-Z]+[a-z]{4,15}/,
      email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      pass: /^[a-z0-9_-]{6,18}$/
    };

    if (VALIDATOR.name.test(name.value)) {
      console.log('name');
    } else {
      console.log('fuck you');
    }

    console.log('object');
    form.reset();
  }

  form.addEventListener('focusout', handleSubmit);
}

check();