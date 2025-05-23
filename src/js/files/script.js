// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLock, bodyUnlock, bodyLockStatus } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActionsClick);

function documentActionsClick(e) {
   const el = e.target;

   if (el.closest('[data-js="menu-search-icon"]')) {
      const wrapper = el.closest('[data-js="menu-search-row"]');
      wrapper.classList.toggle('active');
   }

   if (el.closest('[data-js="sidebar-catalog"]')) {
      const wrapper = document.querySelector('[data-js="sidebar"]');
      if (wrapper) {
         wrapper.classList.add('active');
         wrapper.classList.add('_catalog');
         bodyLock();
      }
   }

   if (el.closest('[data-js="sidebar-filters"]')) {
      const wrapper = document.querySelector('[data-js="sidebar"]');
      if (wrapper) {
         wrapper.classList.add('active');
         wrapper.classList.add('_filters');
         bodyLock();
      }
   }

   if (el.closest('[data-js="sidebar-close"]')) {
      const wrapper = document.querySelector('[data-js="sidebar"]');
      if (wrapper) {
         wrapper.classList.remove('active');
         wrapper.classList.remove('_catalog');
         wrapper.classList.remove('_filters');
      }
      if (bodyLockStatus) {
         bodyUnlock();
      }
   }
}

let map = document.querySelector('#map');

if (map) {
   // Инициализация карты после загрузки API
   ymaps.ready(init);

   function init() {
      // Создание карты
      const map = new ymaps.Map("map", {
         center: [55.63427283250651, 37.440162013813115], // 
         zoom: 17, // Уровень масштабирования
      });

      // Кастомный макет балуна
      const BalloonLayout = ymaps.templateLayoutFactory.createClass(
         '<div class="map__balloon">$[properties.balloonContent]</div>'
      );

      // Добавление метки
      const placemark = new ymaps.Placemark([55.63427283250651, 37.440162013813115], {
         balloonContent: 'МногоЛеса<br> Наша торговая точка'
      }, {
         preset: 'islands#blueDotIcon', // Иконка в виде синей точки с хвостиком
         iconColor: '#1E90FF',
         iconImageSize: [40, 40],
         iconImageOffset: [-20, -20],
         hideIconOnBalloonOpen: false,
         balloonCloseButton: false,
         hideHintOnTouch: true,
         hintContent: null,
         balloonLayout: BalloonLayout,
         balloonPanelMaxMapArea: 0,
         interactivityModel: 'default#silent',
      });

      map.geoObjects.add(placemark);

      // Программно открываем балун (без возможности закрыть)
      placemark.balloon.open();

      // Дополнительные элементы управления
      map.controls
         .remove('geolocationControl') // Удаляем геолокацию
         .remove('searchControl')     // Удаляем поиск
         .remove('trafficControl')     // Удаляем контроль трафика
         .remove('typeSelector')       // Удаляем тип карты
         .remove('fullscreenControl')  // Удаляем кнопку полноэкранного режима
         .remove('rulerControl');     // Удаляем контрол правил
   }
}