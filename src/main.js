import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchPhotoByQuery } from './js/pixabay-api.js';
import { createGalleryMarkup } from './js/render-functions.js';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');


function onSearchForm(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchKeyword.value.trim();
    if(searchQuery === '') {
     galleryEl.innerHTML = '';
     event.target.reset();
     iziToast.show({
        message: 'Input field can not be empty',
        position: 'topCenter',
        timeout: 2000,
        color: 'red',
      });
      return;
    }

    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
    
    fetchPhotoByQuery(searchQuery).then(imagesData => {
        if (imagesData.total === 0) {
            iziToast.show({
              message: 'Sorry, there are no images matching your search query. Try again!',
              position: 'topCenter',
              timeout: 2000,
              color: 'red',
            });
          }
        galleryEl.innerHTML = createGalleryMarkup(imagesData.hits);
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
          });
          lightbox.refresh();
    }).catch(error => 
        console.log(error)).finally(() => {
            event.target.reset();
            loaderEl.classList.add('is-hidden');
        });
};

searchFormEl.addEventListener('submit', onSearchForm);

   


