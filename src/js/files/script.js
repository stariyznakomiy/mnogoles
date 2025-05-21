// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActionsClick);

function documentActionsClick(e) {
   const el = e.target;

   if (el.closest('[data-js="menu-search-icon"]')) {
      const wrapper = el.closest('[data-js="menu-search-row"]');
      wrapper.classList.toggle('active');
   }
}