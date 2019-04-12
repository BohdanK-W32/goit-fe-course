'use strict';

const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "DJ" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "DJ" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "moon" },
  { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "tree's flowers" },
  { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "mountain road" },
  { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "lights" },
  { preview: 'img/preview-7.jpg', fullview: 'img/fullview-7.jpg', alt: "rain drop" },
  { preview: 'img/preview-8.jpg', fullview: 'img/fullview-8.jpg', alt: "sunset lights" },
  { preview: 'img/preview-9.jpg', fullview: 'img/fullview-9.jpg', alt: "cubes" },
  { preview: 'img/preview-10.jpg', fullview: 'img/fullview-10.jpg', alt: "Lamborghini Terzo Millennio" },
  { preview: 'img/preview-11.jpg', fullview: 'img/fullview-11.jpg', alt: "Lamborghini Terzo Millennio" },
  { preview: 'img/preview-12.jpg', fullview: 'img/fullview-12.jpg', alt: "Lamborghini Terzo Millennio" }
];

class Gallery {

  constructor ({items, parentNode, defaultActiveItem = 1}) {
    this._items = items, 
    this._parentNode = parentNode, 
    this._defaultActiveItem = defaultActiveItem, 
    this._preview = document.querySelector('.preview-es6'),
    this.createGallery();
  }

  get items () {return this._items}
  get parentNode () {return this._parentNode}
  get defaultActiveItem () {return this._defaultActiveItem}
  get preview () {return this._preview}

  createGallery() {
    const img = document.createElement('img');
    const div = document.createElement('div');
    const aRight = document.createElement('a');
    const aLeft = document.createElement('a');
    
    div.classList.add('fullview-es6');
    div.classList.add('js-fullview-es6');
    img.classList.add('js-fullview-img-es6'); 
    aLeft.classList.add('js-scroll-left');
    aRight.classList.add('js-scroll-right');
    
    div.append(img);
    this.parentNode.prepend(div);
    this.parentNode.append(aLeft, aRight);

    this.items.map( el => {
      const img = document.createElement('img');
      img.setAttribute('src', el.preview);
      img.setAttribute('data-fullview', el.fullview);
      img.setAttribute('alt', el.alt);
      
      const li = document.createElement('li');
      li.append(img);
      this.preview.append(li);
    });

    const fullviewImg = document.querySelector('.js-fullview-img-es6');
    const scrollLeft = document.querySelector('.js-scroll-left');
    const scrollRight = document.querySelector('.js-scroll-right');
    const onScrolling = onScroll.bind(this);
    fullviewImg.setAttribute('src', this.items[this.defaultActiveItem - 1].fullview);

    this.preview.addEventListener('click', onImgClick);
    scrollLeft.addEventListener('click', onScrolling);
    scrollRight.addEventListener('click', onScrolling);
    
    function onImgClick (e) { if ( e.target.nodeName === 'IMG') {fullviewImg.setAttribute ('src', e.target.getAttribute('data-fullview') )} }
    function onScroll (e) {
      e.target.classList.contains('js-scroll-left')
      ? this.preview.scrollLeft -= 300
      : this.preview.scrollLeft += 300;
    }
  }
}

new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery-es6'),
  defaultActiveItem: 11
});