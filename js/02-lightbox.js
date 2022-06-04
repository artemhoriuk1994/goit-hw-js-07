import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imgRender = createElement(galleryItems);

function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    </li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", imgRender);
var lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
lightBox.on("show.simplelightbox");
console.log(galleryItems);
