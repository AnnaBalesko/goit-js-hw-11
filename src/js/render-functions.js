'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export let galleryItem = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');

function imgTemplate(img) {
  return `<li class='gallery-item'>
    <a class='gallery-link' href=${img.webformatURL}>
    <img class='gallery-image' src='${img.largeImageURL}' alt='${img.tags}'/>
    <p><strong>Likes:</strong> ${img.likes}</p>
    <p><strong>Views:</strong> ${img.views}</p>
    <p><strong>Comments:</strong> ${img.comments}</p>
    <p><strong>Downloads:</strong> ${img.downloads}</p></a></li>`;
}

export function createGallery(images) {
  const markup = images.map(imgTemplate).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  galleryItem.on('show.simplelightbox');
  galleryItem.refresh();
  return markup;
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.remove('hidden');
  }
}

export function hideLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.classList.add('hidden');
  }
}
