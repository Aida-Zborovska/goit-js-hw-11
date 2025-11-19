export default { createGallery, clearGallery, showLoader, hideLoader };

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

function createGallery(images) {
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

function clearGallery() {
  // Ця функція нічого не приймає та повинна очищати вміст контейнера галереї.
  // Нічого не повертає.
}

function showLoader() {
  // Ця функція нічого не приймає, повинна додавати клас для відображення лоадера.
  //  Нічого не повертає.
}

function hideLoader() {
  // Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера.
  //  Нічого не повертає.
}
