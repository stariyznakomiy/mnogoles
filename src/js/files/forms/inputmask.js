/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasksTel = document.querySelectorAll('[type=tel]');
if (inputMasksTel.length) {
	// let inputmask = Inputmask("+7 (999) 999-99-99").mask(inputMasksTel);
	let inputmask = Inputmask({
		mask: "+7 ( 999 ) 999 99-99",
		definitions: {
			"X": {
				validator: "[xX]",
				casing: "upper"
			}
		}
	}).mask(inputMasksTel);
}

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}