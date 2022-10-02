// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(SimpleLightbox);
// console.log(galleryItems);


const gallerryBox = document.querySelector(".gallery");
// console.log(gallerryBox);

const render = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
gallerryBox.insertAdjacentHTML("beforeend", render)



    const lightbox = new SimpleLightbox('.gallery a', {
      captionSelector: "img",
      captionsData: "alt",
      captionDelay: 250,
 
    });
    