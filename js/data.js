import { getRandomNumber } from './util.js';

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const name = ['Вера', 'Коля', 'Андрей', 'Иван', 'Дима', 'Ольга', 'Максим', 'Олег', 'Ярополк'];

const description = [
  'Мои выходные',
  'На прогулке с собакой',
  'Это был худший день в моей жизни!',
  'Сегодня радую вас красивой фотографией',
  'Настроение пообщаться в комментариях',
  'Просто фоточки)'
];

const COUNT_PHOTO = 25;

const Likes = {
  MAX: 15,
  MIN: 200
};

const Comments = {
  MIN: 0,
  MAX: 30
};

const Avatar = {
  MIN: 1,
  MAX: 6
};

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(Avatar.MIN, Avatar.MAX)}svg`,
  message: messages[getRandomNumber(0, messages.length-1)],
  name: name[getRandomNumber(0, name.length - 1)]
});

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: description[getRandomNumber(0, description.length - 1)],
  likes: getRandomNumber(Likes.MIN, Likes.MAX),
  comments: Array.from({length: getRandomNumber(Comments.MIN, Comments.MAX)}).map((_, index) => createComment(index + 1))
});


const getPhoto = () => Array.from({length: COUNT_PHOTO}).map((_, index) => createPhoto(index + 1));

const photos = getPhoto();

export {photos};
