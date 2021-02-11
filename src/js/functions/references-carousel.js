'use strict';

export function referencesCarousel() {
	import Swiper from 'swiper/bundle';

	const referencesSwiper = new Swiper('.references__carousel', {
		pagination: {
			el: '.references__carousel-pagination',
			dynamicBullets: true,
		},
		navigation: {
			nextEl: '.references__carousel-btn-next',
			prevEl: '.references__carousel-btn-prev',
		},
	});
}
