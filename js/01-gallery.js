import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryUl = document.querySelector(".gallery");

createGallery();

function createGallery() {
  const galleryList = galleryItems.reduce((acc, image) => {
    return (
      acc +
      `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}"
              alt="${image.description}"
            />
          </a>
        </li>`
    );
  }, "");
  galleryUl.innerHTML = galleryList;
}
galleryUl.addEventListener("click", showModal);

function showModal(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) {
    return;
  }
  const src = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${src}"/>`);
  instance.show();

  document.body.addEventListener("keydown", closeOnEsc);
  function closeOnEsc(event) {
    if (event.code === "Escape") {
      instance.close();
      document.body.addEventListener("keydown", closeOnEsc);
    }
  }
}

console.log(galleryItems);
