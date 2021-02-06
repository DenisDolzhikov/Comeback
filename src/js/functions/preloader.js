export const preloader = () => {
	const preloaderSelector = document.querySelector('.preloader');

	window.onload = () => {
		preloaderSelector.style.transitionDuration = '0.5s';
  	preloaderSelector.classList.add('preloader--loaded');
  	setTimeout(() => preloaderSelector.style.zIndex = '-1', 500);
	};
}