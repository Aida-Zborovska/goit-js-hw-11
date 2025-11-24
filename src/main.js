import iziToast from 'izitoast';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(e) {
  e.preventDefault();

  const query = form.elements['search-text'].value.trim();
  if (!query) {
    return;
  }

  clearGallery();
  showLoader();
  form.reset();
  getImagesByQuery(query)
    .then(images => {
      images.length > 0
        ? createGallery(images)
        : showMessage(
            'Sorry, there are no images matching your search query. Please try again!'
          );
    })
    .catch(err => console.error(err))
    .finally(() => hideLoader());
}

function showMessage(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    messageColor: '#FFFFFF',
    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',
    iconUrl: './img/icon-error.png',
    iconColor: '#FAFAFB',
    maxWidth: '432px',
  });
}
