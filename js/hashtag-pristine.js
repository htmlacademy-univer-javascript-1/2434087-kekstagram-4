const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;

const formUpload = document.querySelector('.img-upload__form');
const submitBtn = document.querySelector('#upload-submit');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error'
}, true);


const inputHashtag = document.querySelector('.text__hashtags');

let errorMessage = '';

const error =  () => errorMessage;

const hashtagHandler = (value) =>{
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if(!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);
  if(inputArray.length === 0){
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item) => item.indexOf('#', 1) >= 1),
      error: 'РҐСЌС€-С‚РµРіРё СЂР°Р·РґРµР»СЏСЋС‚СЃСЏ РїСЂРѕР±РµР»Р°РјРё',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'РҐСЌС€-С‚РµРі РґРѕР»Р¶РµРЅ РЅР°С‡РёРЅР°С‚СЊСЃСЏ СЃ #',
    },
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'РҐСЌС€-С‚РµРіРё РЅРµ РґРѕР»Р¶РЅС‹ РїРѕРІС‚РѕСЂСЏС‚СЊСЃСЏ',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: `РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР° РѕРґРЅРѕРіРѕ С…СЌС€-С‚РµРіР° ${MAX_SYMBOLS} СЃРёРјРІРѕР»РѕРІ, РІРєР»СЋС‡Р°СЏ СЂРµС€С‘С‚РєСѓ`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `РќРµР»СЊР·СЏ СѓРєР°Р·Р°С‚СЊ Р±РѕР»СЊС€Рµ ${MAX_HASHTAGS} С…СЌС€-С‚РµРіРѕРІ`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zР°-СЏС‘0-9]{1,19}$/i.test(item)),
      error: 'РҐСЌС€-С‚РµРі СЃРѕРґРµСЂР¶РёС‚ РЅРµРґРѕРїСѓСЃС‚РёРјС‹Рµ СЃРёРјРІРѕР»С‹',
    },
  ];
  return rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid){
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const onHashtagInput = (item) =>{
  if(item.validate){
    submitBtn.disabled = true;
  }
  else{
    submitBtn.disabled = false;
  }
};


pristine.addValidator(inputHashtag, hashtagHandler, error, 2, false);

inputHashtag.addEventListener('input', onHashtagInput);
formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  onHashtagInput(evt);
  pristine.validate();
});
