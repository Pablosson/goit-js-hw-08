import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

function galleryItemEl(arr) {
  arr.map(item => {
    galleryEl.insertAdjacentHTML(
      'afterbegin',
      `<a class="gallery__item" href='${item.original}'>
        <img class="gallery__image" src='${item.preview}' alt='${item.description}' />
      </a>`
    );
  });
}

galleryItemEl(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
