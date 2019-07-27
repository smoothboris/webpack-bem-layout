'use strict';

// Требует node.js и пакета mkdirp
// Пакет mkdirp: https://www.npmjs.com/package/mkdirp#install — установить глобально или прописать установку в package.json, в секции devDependencies
// Использование:
//   - поместить этот файл в корень проекта
//   - исправить пути к генерируемым папкам и файлам, если блоки проекта лежат не в ./src/blocks/
//   - в терминале, будучи в корневой папке проекта, выполнить node createBlock.js [имя блока] [доп. расширения через пробел]

const fs = require('fs');                 // будем работать с файловой системой
const mkdirp = require('mkdirp');         // зависимость, должна быть установлена (см. описание выше)

let blockName = process.argv[2];          // получим имя блока
let defaultExtensions = ['scss', 'js'];   // расширения по умолчанию
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));  // добавим введенные при вызове расширения (если есть)

// Если есть имя блока
if(blockName) {

  let dirPath = './Layout/Blocks/' + blockName + '/'; // полный путь к создаваемой папке блока
  mkdirp(dirPath, function(err){                     // создаем

    // Если какая-то ошибка — покажем
    if(err) {
      console.error('Отмена операции: ' + err);
    }

    // Нет ошибки, поехали!
    else {
      console.log('Создание папки ' + dirPath + ' (создана, если ещё не существует)');

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      extensions.forEach(function(extention){

        let filePath = dirPath + blockName + '.' + extention; // полный путь к создаваемому файлу
        let fileContent = '';                                 // будущий контент файла

        switch ( extention ) {
          case 'js':
            fileContent = `import './${blockName}.scss'\n\nexport default function(  ) {\n\n}`;
            break
          case 'scss':
            fileContent = `.${blockName.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g).join('-').toLowerCase()} {\n\n}`
            break
        }

        // Создаем файл, если он еще не существует
        if(fileExist(filePath) === false) {
          fs.writeFile(filePath, fileContent, function(err) {
            if(err) {
              return console.log('Файл НЕ создан: ' + err);
            }
            console.log('Файл создан: ' + filePath);
          });
        }
        else {
          console.log('Файл НЕ создан: ' + filePath + ' (уже существует)');
        }
      });
    }
  });
  layoutModuleSync();
}
else {
  layoutModuleSync()
  console.log('Layout.js обновлен')
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}

/**
 * Добавление созданных модулей в Layout.js
 */
function layoutModuleSync() {
  const fs = require('fs');
  let moduleInit = `//Файл генерируется LayoutModuleCreate.js\n//Содержит модули (условно) относящиеся к верстке (Layout)\nimport './EnvironmentStyles.scss'\nimport './OtherStyles.scss'`
  fs.readdir('./Layout/Blocks/', function(error, folders) {
    if ( error ) {
      console.log('При чтении папок произошла ошибка: ', error)
      return false
    }
    folders.forEach(( folder ) => {
      if (!folder.match('\.(js|scss)$')) {
        // Инициализируем модуль
        moduleInit += `\n
import ${folder} from './Blocks/${folder}/${folder}'
${folder}()

if ( module.hot ) {
  module.hot.accept('./Blocks/${folder}/${folder}.js', function () {
    console.log('Accepting the updated ${folder} module!')
    ${folder}()
  })
}`
      }
    })
    fs.writeFile('./Layout/Layout.js', moduleInit, function(err) {
      if ( err ) {
        console.log('Ошибка записи файла:', err);
      }
    });
  });
}