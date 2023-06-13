# Фронтенд для портала тюркских рунических надписей

http://sandbox.rssda.su/ep_tur
Реализован с помощью javascript библиотеки React. 

## Приложение создано с помощью Create React App
См подробнее [Create React App](https://github.com/facebook/create-react-app).

## Команды для установки и запуска приложения
Устанавливаем React (необходимы NodeJS и NPM):
### `npm install -g create-react-app`
Устанавливаем использующиеся библиотеки:
### `npm install @mui/material`
Библиотека mui предоставляет готовые компоненты для разработки веб-приложений. 
### `npm i react-leaflet`
Библиотека react-leaflet -- компоненты для создания карт.

Для запуска проекта в склонированной директории 
### `npm start`

Так запускается версия приложения в фазе разработки. 
Её можно увидеть в браузере по ссылке [http://localhost:3000](http://localhost:3000) .

Страница автоматически обновляется при внесении изменений в код.

Команда для подготовки папки статических файлов для развертывания на сервере:
### `npm run build`

В результате появляется папка `build`.

## Навигация по коду проекта

Портал состоит из 5 основных страниц. Код находится в папке src\ :
1) О проекте
   homepage.js, navbar.js
3) Каталог надписей
   grid_view.js
5) Одна надпись
   single_view.js, model_metadata.js, multiple_model_metadata.jsx, multiple_models_view.jsx, image_gallery.js
6) Карта
   map.js
7) О моделях
   paradata.jsx

## Документация React
Дополнительная документация React доступна по ссылке [React documentation](https://reactjs.org/).
