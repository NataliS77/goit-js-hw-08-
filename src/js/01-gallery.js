// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
import simpleLightbox from 'simplelightbox';
console.log (SimpleLightbox)
console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery')
const cardMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.addEventListener('click', onOpenModalGallery)
galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createGalleryItemsMarkup (galleryItems){
return galleryItems.map(({ preview, original, description }) => {

    return `
        
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
   
    }).join('');
}
 
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionSelector: 'img',
    captionDelay: 250,
})
