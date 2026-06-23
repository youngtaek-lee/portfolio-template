// =============================
// SPA Router
// =============================
const Router = {
  homeView: null,
  subpageView: null,
  _gsapCtx: null,
  _isFirst: true,

  init() {
    this.homeView    = document.getElementById('home-view');
    this.subpageView = document.getElementById('subpage-view');

    document.addEventListener('click', e => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        this.navigate(href);
      }
    });

    window.addEventListener('popstate', () => this.render(location.pathname, true));

    this.render(location.pathname, true);  // initial load: no transition, render immediately
  },

  navigate(path) {
    history.pushState({}, '', path);
    if (typeof playPageTransition === 'function') {
      playPageTransition(
        () => this.render(path),
        () => this._pendingReveal?.()
      );
    } else {
      this.render(path, true);
    }
  },

  render(path, immediate = false) {
    const isHome = path === '/' || path === '/index.html';
    const page   = this._getPage(path);

    if (this._gsapCtx) {
      this._gsapCtx.revert();
      this._gsapCtx = null;
    }

    if (isHome) {
      this._pendingReveal = null;
      this._showHome();
    } else if (page) {
      this._showSubpage(page, path, immediate);
    } else {
      this._pendingReveal = null;
      this._showHome();
    }

    document.body.classList.toggle('is-subpage', !isHome);
    document.querySelectorAll('.header__nav-btn').forEach(btn => {
      btn.classList.toggle('is-active', path.startsWith(btn.getAttribute('href')));
    });
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  },

  _restoreBottomLinks() {
    if (this._originalBottomLinks) {
      const links = document.querySelector('.bottom-nav__links');
      if (links) links.innerHTML = this._originalBottomLinks;
      this._originalBottomLinks = null;
    }
    document.querySelector('.bottom-nav')?.classList.remove('is-detail');
  },

  _showHome() {
    this._restoreBottomLinks();
    this.homeView.style.display    = '';
    this.subpageView.style.display = 'none';
    this.subpageView.innerHTML     = '';
    this.subpageView.setAttribute('aria-hidden', 'true');
    requestAnimationFrame(() => {
      // reset gsap.set priority → so the timeline in onRefresh can overwrite it with the correct color
      gsap.set(['.header__logo', '.header__nav', '.header__nav-btn', '.header__menu-btn', '.menu-btn'],
        { clearProps: 'color,borderColor' });
      if (typeof window.__heroTaglineRebuild === 'function') window.__heroTaglineRebuild();
      if (typeof window.__centerHobbyBtn === 'function') window.__centerHobbyBtn();
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      window.__lenis?.resize();
    });
  },

  _showSubpage(page, path, immediate = false) {
    this._restoreBottomLinks();
    this.homeView.style.display    = 'none';
    this.subpageView.style.display = '';
    this.subpageView.removeAttribute('aria-hidden');
    this.subpageView.innerHTML = page.render(path);

    const runInit = () => {
      this._gsapCtx = gsap.context(() => page.init(path), this.subpageView);
    };

    if (immediate) {
      runInit();
    } else {
      // runs in sync with the panel slide-out start (onMid +0.1s) — the animation reveals as the panel slides away
      this._pendingReveal = null;
      setTimeout(runInit, 100);
    }

    // recalculate ScrollTrigger positions for shared elements like the footer, based on the subpage layout
    requestAnimationFrame(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      window.__lenis?.resize();
    });
  },

  _getPage(path) {
    if (path === '/about' || path.startsWith('/about'))  return PageAbout;
    if (path === '/works' || path === '/works/')         return PageWorksList;
    if (path.startsWith('/works/'))                      return PageWorksDetail;
    return null;
  },
};
