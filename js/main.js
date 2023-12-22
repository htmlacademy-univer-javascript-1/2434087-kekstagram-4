import { renderPhotos } from './pictures.js';
import {uploadForm} from './formUpload.js';
import {setData} from './fetch.js';
import {showUnloadingErrorMessage} from './utils.js';

setData(renderPhotos,
  () => {
    showUnloadingErrorMessage('РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РґР°РЅРЅС‹Рµ РёР· СЃРµСЂРІРµСЂР° :(');
  },
  'GET');

uploadForm();
