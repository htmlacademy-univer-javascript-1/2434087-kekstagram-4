const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAGS_LENGTH = 20;
const form = document.querySelector('.img-upload__form');
const inputHashtag = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('#upload-submit');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

let errorMessage = '';
const getErrorMessage = () => errorMessage;
const hashtagErrorHandler = (value) => {
  errorMessage = '';
  const hashtagInputText = value.toLowerCase().trim();
  if(hashtagInputText.length === 0){
    return true;
  }

  const hashtagTexts = hashtagInputText.split(/\s+/);
  if(hashtagTexts.length === 0) {
    return true;
  }

  const inputRules = [
    {
      rule: hashtagTexts.some((text) => text.indexOf('#', 1) > 0),
      error: 'РҐСЌС€-С‚РµРіРё РґРѕР»Р¶РЅС‹ СЂР°Р·РґРµР»СЏС‚СЊСЃСЏ РїСЂРѕР±РµР»Р°РјРё'
    },
    {
      rule: hashtagTexts.some((text) => text[0] !== '#'),
      error: 'РҐСЌС€-С‚РµРі РґРѕР»Р¶РµРЅ РЅР°С‡РёРЅР°С‚СЊСЃСЏ СЃ СЃРёРјРІРѕР»Р° # (СЂРµС€С‘С‚РєР°)'
    },
    {
      rule: hashtagTexts.some((text) => text.length === 1 || text[0] !== '#'),
      error: 'РҐРµС€-С‚РµРі РЅРµ РјРѕР¶РµС‚ СЃРѕСЃС‚РѕСЏС‚СЊ С‚РѕР»СЊРєРѕ РёР· РѕРґРЅРѕР№ СЂРµС€С‘С‚РєРё'
    },
    {
      rule: hashtagTexts.some((text) => text.length > MAX_HASHTAGS_LENGTH),
      error: `Р”Р»РёРЅР° С…РµС€-С‚РµРіР° РїСЂРµРІС‹С€Р°РµС‚ ${MAX_HASHTAGS_LENGTH} СЃРёРјРІРѕР»РѕРІ`
    },
    {
      rule: hashtagTexts.some((text, index, array) => array.indexOf(text, index + 1) > index),
      error: 'РћРґРёРЅ Рё С‚РѕС‚ Р¶Рµ С…СЌС€-С‚РµРі РЅРµ РјРѕР¶РµС‚ Р±С‹С‚СЊ РёСЃРїРѕР»СЊР·РѕРІР°РЅ РґРІР°Р¶РґС‹'
    },
    {
      rule: hashtagTexts.some((text) => !/^#[0-9Р°-СЏС‘a-z]{1,19}$/i.test(text)),
      error: 'РҐРµС€-С‚РµРі СЃРѕРґРµСЂР¶РёС‚ РЅРµРґРѕРїСѓСЃС‚РёРјС‹Рµ СЃРёРјРІРѕР»С‹'
    },
    {
      rule: hashtagTexts.length > MAX_HASHTAGS_COUNT,
      error: `РќРµР»СЊР·СЏ СѓРєР°Р·С‹РІР°С‚СЊ Р±РѕР»СЊС€Рµ ${MAX_HASHTAGS_COUNT} С…СЌС€-С‚РµРіРѕРІ`
    }
  ];

  return inputRules.every((inputRule) => {
    const isValid = !inputRule.rule;
    if(!isValid){
      errorMessage = inputRule.error;
    }
    return isValid;
  });
};

pristine.addValidator(inputHashtag, hashtagErrorHandler, getErrorMessage, 2, false);

const onHashtagInput = () => {
  submitButton.disabled = !pristine.validate();
};

const uploadHashtagInput = () => {
  inputHashtag.addEventListener('input', onHashtagInput);
};

const checkFormValidation = () => pristine.validate();

const clearHashtagsField = () => {
  inputHashtag.value = '';

  pristine.validate();
};

export {uploadHashtagInput, clearHashtagsField, checkFormValidation};
