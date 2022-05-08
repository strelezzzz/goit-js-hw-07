import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

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
// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    const imageFocusSource = e.target.dataset.source;
    // 4.Відкриття модального вікна по кліку на елементі галереї.
    const modalWindow = basicLightbox.create(`<img width='1280' heigth = '800' 
    src ="${imageFocusSource}" >
    `)

    modalWindow.show();
}
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання
// на мініфіковані(.min) файли бібліотеки.



