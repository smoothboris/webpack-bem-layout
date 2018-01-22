import createMenu from './modules/menu.js';
import sendRequest from './modules/ajax.js';

let menu = createMenu(['Главная','Блог', 'Обо мне'], 'menu');

document.body.appendChild(menu);

sendRequest();