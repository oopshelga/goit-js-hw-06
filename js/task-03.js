const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery");

const createGalleryItem = images.map(image => {
  return `
    <li>
      <img src="${image.url}" alt="${image.alt}" class="gallery-item">
    </li>
  `;
}).join("");

 galleryList.insertAdjacentHTML("beforeend", createGalleryItem);

// const itemImg = document.querySelector(".gallery");

// const galleryMarkup = images.map(({ url, alt}) => {
//   return
//   `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li>`;
//   }).join('');

// console.log(galleryMarkup);
// itemImg.insertAdjacentHTML("beforeend", galleryMarkup);


// const imagesMarkup = images.map(image => {
//    return `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img"></li>`;
//  }).join('');