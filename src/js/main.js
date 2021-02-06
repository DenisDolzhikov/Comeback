'use strict';

// import './vendor/focus-visible.min.js';
// import './_vars';
// import {resizeContent} from './functions/resize';
// import {scrollTo} from './functions/smooth-scroll';
// import {disableScroll, enableScroll} from './functions/stop-scroll';
import {preloader} from './functions/preloader';
import {overlayMenu} from './functions/overlay-menu';
import {stickyNav} from './functions/sticky-nav';
import {headerBackgroundParallax} from './functions/header';

preloader();
overlayMenu();
stickyNav();
headerBackgroundParallax();

//disableScroll(fix) // fix -> class of element with position: fixed
