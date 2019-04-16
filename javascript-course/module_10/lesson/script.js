'use strict';

fetch('https://codepen.io/loomernescent/pen/LRGRaB.js')
.then(response => response.json())
.then(data => generateList(data))

function generateList (arr) {
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  arr.map(el => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('q');
    const span = document.createElement('span');

    p.textContent = el.quote;
    img.setAttribute('src', el.imgSrc);
    span.textContent = el.whom;

    li.append(img, p, span);
    ul.appendChild(li);
  });
  div.appendChild(ul);

  document.body.prepend(ul);
}

function generateUI (arr) {
  const ulList = document.createElement('ul');

  arr.map(el => {
    const item = document.createElement('li');
    const title = document.createElement('h2');
    const img = document.createElement('img');

    img.classList.add('movie-img');

    img.setAttribute('src', `https://image.tmdb.org/t/p/w500${el.poster_path}`);
    title.textContent = el.title;


    item.appendChild(title);
    item.appendChild(img);
    ulList.appendChild(item);
    document.body.appendChild(ulList);
  })
}

function fetchMovie () {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=5874acfd11651a28c55771624f7021f4&language=uk-UK')
  .then(response => response.json())
  .then(data => generateUI(data.results));
}

function searchHarryPotter (name) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=${name}&page=1&include_adult=false`)
  .then(response => response.json())
  .then(data => {
    const ul = document.createElement('ul');

    data.results.map(el => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const title = document.createElement('p');

      img.classList.add('movie-img');

      img.setAttribute('src', `https://image.tmdb.org/t/p/w500/${el.backdrop_path}`);
      title.textContent = el.title;

      li.append(img, title);
      ul.appendChild(li);
    })
    document.body.append(ul);
  });
}

function todoList () {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const list = document.querySelector('ul');
  const delAll = document.querySelector('button[type=reset]');


  Object.values(localStorage).map( el => {
    const li = document.createElement('li');
    li.textContent = el;
    list.appendChild(li);
  })

  function onSubmit (e) {
    e.preventDefault();

    localStorage.setItem(Date.now(), input.value);

    createItem();
    form.reset();
  }

  function createItem () {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.append(li);
  }

  function deleteAllItems () {
    localStorage.clear();
    list.innerHTML = '';
  }

  delAll.addEventListener('click', deleteAllItems);
  form.addEventListener( 'submit', onSubmit );

}

todoList();

fetchMovie();

searchHarryPotter('Harry Potter');