/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Thumbs, EffectFade, FreeMode } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
import 'swiper/scss/effect-fade';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('[data-js-slide="production-thumbs"]')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var productionThumbs = new Swiper('[data-js-slide="production-thumbs"]', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,
			allowTouchMove: false,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('[data-js-slide="production"]')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const prev = document.querySelector('[data-js-slide="production-prev"]'),
			next = document.querySelector('[data-js-slide="production-next"]')
		var production = new Swiper('[data-js-slide="production"]', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: false,
			speed: 800,
			effect: "fade",

			thumbs: {
				swiper: productionThumbs,
			},

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: prev,
				nextEl: next,
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	//========================================================================================================================================================


	if (document.querySelector('[data-js-slide="reviews"]')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const reviewsThumbs = new Swiper('[data-js-slide="reviews-thumbs"]', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, FreeMode],
			slidesPerView: 4,
			spaceBetween: 10,
			watchSlidesProgress: true,
			slideToClickedSlide: true,
			centeredSlides: false,
			freeMode: {
				enabled: true,
				sticky: true,
			},
			// События
			on: {
				click(reviewsThumbs) {
					updateActiveSlide(reviewsThumbs.clickedIndex, reviewsThumbs.slides);
					updateActiveSlide(reviewsThumbs.clickedIndex, reviewsSlider.slides);
				}
			}
		});

		// Создаем слайдер
		const prev = document.querySelector('[data-js-slide="reviews-prev"]'),
			next = document.querySelector('[data-js-slide="reviews-next"]')
		var reviewsSlider = new Swiper('[data-js-slide="reviews"]', { // Указываем скласс нужного слайдера
			modules: [Navigation, Thumbs],
			slidesPerView: 4,
			spaceBetween: 20,
			thumbs: {
				swiper: reviewsThumbs,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: prev,
				nextEl: next,
			},
			// События
			on: {
				click(reviewsSlider) {
					updateActiveSlide(reviewsSlider.clickedIndex, reviewsSlider.slides);
					updateActiveSlide(reviewsSlider.clickedIndex, reviewsThumbs.slides);
				}
			}
		});

		// Функция для обновления активного слайда
		function updateActiveSlide(activeIndex, slides) {
			if (activeIndex !== undefined) {
				slides.forEach((slide, index) => {
					slide.classList.toggle('active', index === activeIndex);
				});
			}
		}
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});