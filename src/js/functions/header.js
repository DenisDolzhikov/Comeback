'use strict';

export const headerBackgroundParallax = () => {
	const image = document.querySelector('.header');

	window.addEventListener('scroll', () => {
		let offset = window.pageYOffset;
					
		if (window.matchMedia("(min-width: 1000px)").matches) {
				image.style.backgroundPositionY = offset * 0.7 + 'px';
		}
	});
}