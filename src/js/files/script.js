// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// document.addEventListener("click", documentActionsClick);

// function documentActionsClick(e) {
//    const el = e.target;

//    if (el.closest('[data-js-slide="reviews-slide"]')) {
//       const item = el.closest('[data-js-slide="reviews-slide"]');
//       const activeItem = document.querySelector('[data-js-slide="reviews-slide"].active');

//       if (activeItem) {
//          activeItem.classList.remove('active');
//       }

//       item.classList.add('active');
//    }
// }