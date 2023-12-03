
import { createPostsArray } from './data.js';
import { renderPictures } from './renderer.js';
import { openModal } from './pictures-modal.js';

const posts = createPostsArray();
renderPictures(posts);
const pictureElements = document.querySelectorAll('.picture');

pictureElements.forEach((pictureElement, index) => {
  pictureElement.addEventListener('click', () => {
    openModal(posts[index]);
  });
});


import {photos} from './data.js';
import {renderPictures} from './pictures.js';

renderPictures(photos);
