'use strict';

export const stickyNav = () => {
  let stickyNav = document.querySelector('.sticky-nav');

  if (window.scrollY > 90) {
    stickyNav.classList.add('sticky-nav--scroll');
  }

  function onScroll() {
    window.addEventListener('scroll', callbackFunc);

    function callbackFunc() {
      let y = window.pageYOffset;

      if (y > 90) {
        stickyNav.classList.add('sticky-nav--scroll');
        stickyNav.style.transition = '0.5s';
      } else {
        stickyNav.classList.remove('sticky-nav--scroll');
        stickyNav.classList.remove('offset');
      }
    }
  }

  onScroll();
}
