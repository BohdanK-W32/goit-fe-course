/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const body = document.querySelector('body');

const createPostCard = post => {

  const createPost = document.createElement('div');
  const createPostImage = document.createElement('img');
  const createPostBody = document.createElement('div');
  const createPostTitle = document.createElement('h2');
  const createPostDescription = document.createElement('p');
  const createPostLink = document.createElement('p');

  //add classes
  createPost.classList.add('post');
  createPostImage.classList.add('post__image');
  createPostBody.classList.add('post__body');
  createPostTitle.classList.add('post__title');
  createPostDescription.classList.add('post__description');
  createPostLink.classList.add('post__link');

  //add content + attributes
  createPostImage.setAttribute('src', post.img);
  createPostImage.setAttribute('alt', 'post image');
  createPostTitle.textContent = post.title;
  createPostDescription.textContent = post.text;
  createPostLink.textContent = post.link;

  //append
  createPost.append(createPostImage, createPostBody);
  createPostBody.append(createPostTitle, createPostDescription, createPostLink);
  body.appendChild(createPost);
};

const createCards = posts => posts.map( post => createPostCard(post) );

createCards(posts);