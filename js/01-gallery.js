import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgRender = createElement(galleryItems);

function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}
galleryContainer.insertAdjacentHTML("beforeend", imgRender);

galleryContainer.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src='${bigImgUrl}'>
`);
  instance.show();

  window.addEventListener("keydown", escPress);
  window.addEventListener("click", escPress);

  function escPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", escPress);
      window.removeEventListener("click", escPress);
    }
  }
}
console.log(galleryItems);
