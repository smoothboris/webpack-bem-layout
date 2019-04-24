#Webpack BEM Layout


##Что это
Болванка для верстки проекта по БЭМ.   
Inpired by [NTH-start-project](https://github.com/nicothin/NTH-start-project).  


##Особенности
* Webpack, SCSS, Babel, БЭМ.
* Css в компилируется в отдельный файлик.
* Dev sever, HMR.
* Watcher выделен в npm команду, для удобства изменений, когда верстка уже натянута на движок/фреймворк/etc.  


## Структура болванки
```
App/
└───App.js -- Entry point
Assets/
└───Images/ 
Layout/   
└───Menu/ 
│   └───Menu.js
│   └───Menu.scss
└───Button/
│   └───Button.js
│   └───Button.scss
└───.../
│   └───....js
│   └───....scss
└───Layout.js -- Генерируемый файл, инициализирует модули
└───EnvironmentStyles.scss -- Стили окружения (normalize.css, bootstrap, etc.)
└───OtherStyles.scss -- Стили по каким-то причинам не входящие в понятие "блок"
└───Variables.scss -- Переменные
index.ejs -- Шаблон
LayoutModuleCreate.js -- Скрипт для генерации блоков
```


##Как это использовать

Сгенерировать модуль:
```
node LayoutModuleCreate.js ModuleName
```
В результате исполнения скрипта сгенерируется каталог ModuleName 
содержащая файлы ModuleName.js и ModuleName.scss.  
Обновится файл инициализирующий модули Layout.js.  
Название модуля необходимо задавать в CamelCase.
  
Обновить список модулей:
```
node LayoutModuleCreate.js
```
Если скрипту не передавать никаких параметров, то он перегенерирует Layout.js.


##Команды
```
npm dev    # dev server, hmr
npm build  # сборка проекта для прода
npm watch  # вотчинг за файликами
```


##To Do
* Добавить mkdir в dev dependencies 
* Организовать конфиги webpack'a в отдельный каталог
* Добавить линтинг
 
P.S Модуль и Блок в контексте верстки одно и тоже, но т.к. это webpack, то решил использовать нативное для JS название