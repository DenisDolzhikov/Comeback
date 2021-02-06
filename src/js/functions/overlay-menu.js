'use strict';

export function overlayMenu() {
	const burger = document.querySelector('.burger');
	const overlayMenuSelector = document.querySelector('.overlay-menu')

	burger.addEventListener('click', () => {
		overlayMenuSelector.classList.toggle('overlay-menu--visible')
	});
}