import galleryItems from "./gallery-items.js"

const jsGalleryRef = document.querySelector('.js-gallery');

const liMarkup = (el => {
    const galleryItemRef = document.createElement('li');
    const gallerylinkRef = document.createElement('a');
    const galleryImageRef = document.createElement('img');
    
    galleryItemRef.classList.add('gallery__item');
    gallerylinkRef.classList.add('gallery__link');
    galleryImageRef.classList.add('gallery__image');
    
    gallerylinkRef.setAttribute('href', el.original);
    galleryImageRef.setAttribute('src', el.preview);
    galleryImageRef.setAttribute('data-source', el.original);
    galleryImageRef.setAttribute('alt', el.description);
    galleryItemRef.append(gallerylinkRef);
    galleryItemRef.append(galleryImageRef);
    
    return galleryItemRef;
});

const allGallery = galleryItems.map(element => {
    return liMarkup(element);
    
});
   jsGalleryRef.append(...allGallery);



// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>