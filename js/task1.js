import galleryItems from "./gallery-items.js"

const jsGalleryRef = document.querySelector('.js-gallery');



const liMarkup = (element => {
    const galleryItemRef = document.createElement('li');
    const gallerylinkRef = document.createElement('a');
    const galleryImageRef = document.createElement('img');
    
    galleryItemRef.classList.add('gallery__item');
    gallerylinkRef.classList.add('gallery__link');
    galleryImageRef.classList.add('gallery__image');
    
    gallerylinkRef.setAttribute('href', 'element.original');
    galleryImageRef.setAttribute('src', 'element.preview');
    galleryImageRef.setAttribute('data-source','element.original');
    galleryImageRef.setAttribute('alt', 'element.description');

    galleryItemRef.append(gallerylinkRef);
    galleryItemRef.append(galleryImageRef);
    
    return galleryItemRef;
});
console.dir(galleryItems);
const allGallery = galleryItems.map(element =>{
   // console.log(element[key]);
  //liMarkup(element);

 //console.dir(Object.values(elements));
    // .forEach(element => {
    //     return liMarkup(Object.values(element));
    // });
    //console.dir(element[key]);
    //  liMarkup(element);
     
    return;
    //console.dir(liMarkup);
})
console.dir(allGallery);
  jsGalleryRef.append(...allGallery);
  console.dir(jsGalleryRef);

//console.dir(jsGalleryRef);
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