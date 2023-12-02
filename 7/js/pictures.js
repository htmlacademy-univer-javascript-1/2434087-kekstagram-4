const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = (photo) => {
  const {url, description, comments, likes} = photo;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

const fragment = document.createDocumentFragment();

const renderPictures = (photos) => {
  photos.forEach((photo) => {
    fragment.appendChild(renderPicture(photo));
  });

  pictures.appendChild(fragment);
};

export {renderPictures};
