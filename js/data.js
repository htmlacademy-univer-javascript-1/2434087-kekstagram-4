import {getRandomInteger, createRandomIdFromRangeGenerator, createImageUrl} from './utils.js';

const DESCRIPTIONS = [
  'РњРёРєСЂРѕСЂР°Р№РѕРЅ',
  'Р’РµС‡РµСЂРёРЅРєР°',
  'РЎРµРјСЊСЏ',
  'РџСЂРѕРіСѓР»РєР°',
  'Р›СЏРіСѓС€РєР°',
  'Р”РµС‚СЃРєР°СЏ РїР»РѕС‰Р°РґРєР°',
  'Р¦РµСЂРєРѕРІСЊ',
  'РџРёРєРЅРёРє',
  'РђСЂР±СѓР·',
];

const NAMES = [
  'Р•РІРіРµРЅРёР№',
  'Р“РµРѕСЂРіРёР№',
  'РњР°РєСЃ',
  'Р¤РµРґРѕСЂ',
  'РќРµРєРёС‚',
  'РР»СЊСЏ',
];

const MESSAGES = [
  'Р’СЃС‘ РѕС‚Р»РёС‡РЅРѕ!',
  'Р’В С†РµР»РѕРј РІСЃС‘ РЅРµРїР»РѕС…Рѕ. РќРѕВ РЅРµВ РІСЃС‘.',
  'РљРѕРіРґР° РІС‹В РґРµР»Р°РµС‚Рµ С„РѕС‚РѕРіСЂР°С„РёСЋ, С…РѕСЂРѕС€РѕВ Р±С‹ СѓР±РёСЂР°С‚СЊ РїР°Р»РµС† РёР·В РєР°РґСЂР°. Р’В РєРѕРЅС†Рµ РєРѕРЅС†РѕРІ СЌС‚Рѕ РїСЂРѕСЃС‚Рѕ РЅРµРїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕ.',
  'РњРѕСЏ Р±Р°Р±СѓС€РєР° СЃР»СѓС‡Р°Р№РЅРѕ С‡РёС…РЅСѓР»Р° СЃВ С„РѕС‚РѕР°РїРїР°СЂР°С‚РѕРј РІВ СЂСѓРєР°С… РёВ СѓВ РЅРµС‘ РїРѕР»СѓС‡РёР»Р°СЃСЊ С„РѕС‚РѕРіСЂР°С„РёСЏ Р»СѓС‡С€Рµ.',
  'РЇВ РїРѕСЃРєРѕР»СЊР·РЅСѓР»СЃСЏ РЅР°В Р±Р°РЅР°РЅРѕРІРѕР№ РєРѕР¶СѓСЂРµ РёВ СѓСЂРѕРЅРёР» С„РѕС‚РѕР°РїРїР°СЂР°С‚ РЅР°В РєРѕС‚Р° РёВ СѓВ РјРµРЅСЏ РїРѕР»СѓС‡РёР»Р°СЃСЊ С„РѕС‚РѕРіСЂР°С„РёСЏ Р»СѓС‡С€Рµ.',
  'Р›РёС†Р° СѓВ Р»СЋРґРµР№ РЅР°В С„РѕС‚РєРµ РїРµСЂРµРєРѕС€РµРЅС‹, РєР°Рє Р±СѓРґС‚Рѕ РёС…В РёР·Р±РёРІР°СЋС‚. РљР°Рє РјРѕР¶РЅРѕ Р±С‹Р»Рѕ РїРѕР№РјР°С‚СЊ С‚Р°РєРѕР№ РЅРµСѓРґР°С‡РЅС‹Р№ РјРѕРјРµРЅС‚?!'
];

const PHOTOS_COUNT = 25;
const imageIdGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const imageUrlGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const COMMENTS = {
  MIN : 0,
  MAX : 30
};

const LIKES = {
  MIN : 15,
  MAX : 200
};

const createRandomComment = (generatorComments, generatorUrl) => ({
  id: generatorComments(),
  avatar: createImageUrl(generatorUrl(), 'img/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const createRandomComments = (count) => {
  const result = [];
  const commentIdGenerator = createRandomIdFromRangeGenerator(1, count);

  for (let i = 0; i < count; i++) {
    const urlIdGenerator = createRandomIdFromRangeGenerator(1, 6);

    result.push(createRandomComment(commentIdGenerator, urlIdGenerator));
  }

  return result;
};

const createImage = () => ({
  id: imageIdGenerator(),
  url: createImageUrl(imageUrlGenerator(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

export {PHOTOS_COUNT, createImage};
