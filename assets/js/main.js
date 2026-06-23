// =============================
// Init
// =============================

function setRealVH() {
  const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
}
setRealVH();
window.addEventListener('resize', setRealVH);
window.addEventListener('orientationchange', () => setTimeout(setRealVH, 200));

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });

  // handle the GitHub Pages SPA redirect
  const redirect = sessionStorage.getItem('spa-redirect');
  if (redirect) {
    sessionStorage.removeItem('spa-redirect');
    history.replaceState({}, '', redirect);
  }

  initTheme();
  initPageTransition();
  Router.init();

  // renderWorks(); // currently superseded by static HTML
  initWorksThumb();
  initWorksSparkle();
  initCursor();
  initAboutScroll();
  initScrollColorReveals();

  initWorksReveal();
  initAboutTextScroll();

  const lenis = initLenis();
  window.__lenis = lenis;
  initHeader(lenis);
  initMobileMenu();

  initHobbyPopcorn();
  initIntro();
  initHeroTaglineScroll();
  initFooterBig();
  initFooterScale();

});
