'use strict';

class LaptopShop {
  constructor() {
    this.form = document.querySelector('.js-form'),
    (this.checboxes = document.querySelectorAll('input[type="checkbox"]')),
      (this.filterBtn = document.querySelector('button[type="submit"]')),
      (this.resetBtn = document.querySelector('button[type="reset"]')),
      (this.values = { size: [], color: [], release_date: [] }),
      (this.laptops = [
        {
          size: 13,
          color: 'white',
          price: 28000,
          release_date: 2015,
          name: 'Macbook Air White 13"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 13,
          color: 'gray',
          price: 32000,
          release_date: 2016,
          name: 'Macbook Air Gray 13"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 13,
          color: 'black',
          price: 35000,
          release_date: 2017,
          name: 'Macbook Air Black 13"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 15,
          color: 'white',
          price: 45000,
          release_date: 2015,
          name: 'Macbook Air White 15"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 15,
          color: 'gray',
          price: 55000,
          release_date: 2016,
          name: 'Macbook Pro Gray 15"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 15,
          color: 'black',
          price: 45000,
          release_date: 2017,
          name: 'Macbook Pro Black 15"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 17,
          color: 'white',
          price: 65000,
          release_date: 2015,
          name: 'Macbook Air White 17"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 17,
          color: 'gray',
          price: 75000,
          release_date: 2016,
          name: 'Macbook Pro Gray 17"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        },
        {
          size: 17,
          color: 'black',
          price: 80000,
          release_date: 2017,
          name: 'Macbook Pro Black 17"',
          img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
        }
      ]),
      (this.filteredList = this.laptops),
      this.addEventListeners(),
      this.renderTemplate(this.laptops);
  }

  renderTemplate(data) {
    const container = document.querySelector('#main');
    container.innerHTML = `<template id="js-template">
      {{#each this}}
        <div class="goods">
          <img src="{{img}}" alt="{{name}}" class="image">
          <h3 class="title">{{name}}</h3>
          <span class="size">Size: {{size}} inch</span>
          <span class="color">Color: {{color}}</span>
          <span class="release-date">Relaease year: {{release_date}}</span>
          <h5 class="price">{{price}}</h5>
          <p class="descr">{{descr}}</p>
        </div>
      {{/each}}
    </template>`;

    const source = document.querySelector('#js-template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = template(data);

    container.innerHTML = markup;
  }

  filterBySize(filter) {
    if (filter.size.length) {
      this.filteredList = this.filteredList.filter(el => {
        if ( filter.size.includes(el.size.toString()) ) return el;
      });
    }
  }

  filterByColor(filter) {
    if (filter.color.length) {
    this.filteredList = this.filteredList.filter(el => {
        if ( filter.color.includes(el.color.toString()) ) return el;
      });
    }
  }

  filterByReleaseDate(filter) {
    if (filter.release_date.length) {
    this.filteredList = this.filteredList.filter(el => {
        if ( filter.release_date.includes(el.release_date.toString()) ) return el;
      });
    }
  }

  updateFilter = e => {
    e.preventDefault();

    this.filteredList = this.laptops;
    this.values = { size: [], color: [], release_date: [] };
    this.values = Array.from(this.checboxes).reduce( (acc, el) => {
        if (el.checked) acc[el.name].push(el.value);
        return acc;
      }, this.values);

    if (this.values.size.length || this.values.color.length || this.values.release_date.length) {
      this.filterBySize(this.values);
      this.filterByColor(this.values);
      this.filterByReleaseDate(this.values);
      this.renderTemplate(this.filteredList);
    }
  };

  resetFilter = e => {
    e.preventDefault();

    this.values = { size: [], color: [], release_date: [] };
    this.filteredList = this.laptops;
    this.form.reset();
    this.renderTemplate(this.filteredList);
  };

  addEventListeners() {
    this.filterBtn.addEventListener('click', this.updateFilter);
    this.resetBtn.addEventListener('click', this.resetFilter);
  }
}

new LaptopShop();