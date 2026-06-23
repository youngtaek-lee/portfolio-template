// =============================
// Intro — sparkle → intro slides up, dragging the main content with it
// =============================
function initIntro() {
  const intro  = document.getElementById('intro');
  const wrap   = document.getElementById('introSparkle');
  const gray   = intro ? intro.querySelector('.intro__sparkle--gray')   : null;
  const orange = intro ? intro.querySelector('.intro__sparkle--orange') : null;
  if (!intro || !wrap || !gray || !orange) {
    initHeroEntrance();
    revealHeader();
    return;
  }

  document.body.style.overflow = 'hidden';

  // orange trail layer — follows just behind the intro, slightly delayed
  const trail = document.createElement('div');
  trail.style.cssText = 'position:fixed;inset:0;background:var(--intro-trail-bg);z-index:99989;pointer-events:none;';
  document.body.appendChild(trail);

  // hero-wrap is the ScrollTrigger trigger so leave it alone — only move the inner .hero section
  // intro is covered with position: fixed, so no clipping needed
  const heroSection = document.querySelector('.hero');
  if (heroSection) gsap.set(heroSection, { y: 160, opacity: 0 });

  // if the intro is still frozen when the tab regains focus, skip it immediately
  const skipIntro = () => {
    document.removeEventListener('visibilitychange', onVisible);
    tl.kill();
    intro.isConnected && intro.remove();
    trail.isConnected && trail.remove();
    document.body.style.overflow = '';
    if (heroSection) gsap.set(heroSection, { clearProps: 'transform,opacity' });
    window.__onCurtainMid?.();
    window.__onCurtainMid = null;
    initHeroEntrance();
    revealHeader();
  };
  const onVisible = () => { if (!document.hidden && intro.isConnected) skipIntro(); };
  document.addEventListener('visibilitychange', onVisible);

  const tl = gsap.timeline();
  tl.to(gray,   { opacity: 1, duration: 0.5, ease: 'power2.inOut' })
    .to(orange,  { clipPath: 'inset(0% 0 0 0)', duration: 1.6, ease: 'power2.inOut' }, '+=0.15')
    .to(intro,   { y: '-100%', duration: 1.2, ease: 'power3.inOut',
        onComplete: () => intro.remove() }, '+=0.2')
    .to(trail,   { y: '-100%', duration: 1.2, ease: 'power3.inOut',
        onComplete: () => trail.remove() }, '<+=0.15')
    .call(() => { window.__onCurtainMid?.(); window.__onCurtainMid = null; }, null, 3.05)
    .call(() => revealHeader(), null, 3.85);

  if (heroSection) tl.to(heroSection, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.inOut' }, 2.9);

  tl.call(() => {
    document.removeEventListener('visibilitychange', onVisible);
    document.body.style.overflow = '';
    initHeroEntrance();
  });
}
