'use strict';

const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "DJ" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "DJ" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "moon" },
  { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "tree's flowers" },
  { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "mountain road" },
  { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "lights" },
  { preview: 'img/preview-7.jpg', fullview: 'img/fullview-7.jpg', alt: "rain drop" },
  { preview: 'img/preview-8.jpg', fullview: 'img/fullview-8.jpg', alt: "sunset lights" }
];

const preview = document.querySelector('.preview');
const img_gallery = document.querySelector('.js-image-gallery');

preview.addEventListener('click', onImgClick);
preview.addEventListener('mouseover', onImgOver);
preview.addEventListener('mouseout', onImgOut);
createGallery();

const previewFirstLi = preview.firstElementChild;
const full_img = document.querySelector('.js-fullview-img');

full_img.setAttribute ( 'src', previewFirstLi.firstElementChild.getAttribute('data-fullview') );

function createGallery () { 
  const div = document.createElement('div');
  const img = document.createElement('img');
  
  div.classList.add('fullview');
  div.classList.add('js-fullview');
  img.classList.add('js-fullview-img');
  
  galleryItems.map(el => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    
    img.setAttribute( 'src', el.preview );
    img.setAttribute( 'data-fullview', el.fullview );
    img.setAttribute( 'alt', el.alt );
    
    img_gallery.append(div);
    li.append(img);
    preview.append(li);
  }); 
  
  div.append(img);
  img_gallery.prepend(div);
}

function onImgClick (e) { if ( e.target.nodeName === 'IMG') {full_img.setAttribute ('src', e.target.getAttribute('data-fullview') )} }
function onImgOver (e) { if ( e.target.nodeName === 'IMG') {e.target.classList.add('js-current-img')} }
function onImgOut (e) { if ( e.target.nodeName === 'IMG') {e.target.classList.remove('js-current-img')} }

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

class Gallery {

  constructor (items, parentNode, defaultActiveItem) {
    this.items = items, 
    this.parentNode = parentNode, 
    this.defaultActiveItem = defaultActiveItem
  }
  
  onImgClick (e) { if ( e.target.nodeName === 'IMG') {full_img.setAttribute ('src', e.target.getAttribute('data-fullview') )} }
  
  onImgOver (e) { if ( e.target.nodeName === 'IMG') {e.target.classList.add('js-current-img')} }

  onImgOut (e) { if ( e.target.nodeName === 'IMG') {e.target.classList.remove('js-current-img')} }

  createGallery () {
    const div = document.createElement('div');
    
    this.items.map(el => {
      const li = document.createElement('li');
      const img = document.createElement('img');

      img.setAttribute( 'src', el.preview );
      img.setAttribute( 'data-fullview', el.fullview );
      img.setAttribute( 'alt', el.alt );
      
    } );
  }

}

new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery-es6'),
  defaultActiveItem: 1
});

/* Далее плагин работает в автономном режиме */