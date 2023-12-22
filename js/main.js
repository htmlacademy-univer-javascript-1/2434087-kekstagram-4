import {uploadForm} from './formUpload.js';
import {setData} from './fetch.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './upload-data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РґР°РЅРЅС‹Рµ РёР· СЃРµСЂРІРµСЂР° :(');
  },
  'GET');

uploadForm();
