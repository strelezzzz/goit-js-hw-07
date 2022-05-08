import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryContainer = document.querySelector('.gallery')
const galleryImg = createImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImg);

function createImgMarkup(images) {
    return images.map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img
                                class="gallery__image"
                                src="${preview}"
                                data-source="${original}"
                                alt="${description}"
                            />
                        </a>
                    </div>
                    `;
        })
        .join('');      
}
