import SimpleLightbox from 'simplelightbox';

const loader = document.querySelector('.loader-target');
const galleryElem = document.querySelector('.gallery');

const gallery = new SimpleLightbox('.gallery a', {
  /* options */
});

export function createGallery(images) {
  console.log('g');

  const markup = '<a href=""><img src="" alt="" /></a>';
  galleryElem.innerHTML = markup;
  // <div class="gallery">
  //   <a href="images/image1.jpg">
  //     <img src="images/thumbs/thumb1.jpg" alt="" title="" />
  //   </a>
  //   <a href="images/image2.jpg">
  //     <img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image" />
  //   </a>
  // </div>; - з документації лайтбкс
  // Ця функція повинна приймати масив images, створювати HTML - розмітку
  //  для галереї, додавати її в контейнер галереї та викликати метод екземпляра
  //  SimpleLightbox refresh().Нічого не повертає.
}

export function clearGallery() {
  galleryElem.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  loader.classList.remove('loader');
}
