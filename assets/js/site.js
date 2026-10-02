(() => {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  // Solid nav once the page scrolls past the top of the hero.
  const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu.
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

  // Brand film: pause control, and no autoplay for reduced-motion users.
  const film = document.getElementById('film');
  const toggle = document.getElementById('film-toggle');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const label = () => { const p = film.paused; toggle.textContent = p ? 'Play' : 'Pause'; toggle.setAttribute('aria-label', (p ? 'Play' : 'Pause') + ' brand film'); };
  if (reduce) { film.removeAttribute('autoplay'); film.pause(); }
  film.addEventListener('play', label); film.addEventListener('pause', label); label();
  toggle.addEventListener('click', () => (film.paused ? film.play() : film.pause()));

  // Reveal blocks below the fold as they scroll into view.
  const blocks = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.remove('pending'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    blocks.forEach((b) => { if (b.getBoundingClientRect().top > window.innerHeight) { b.classList.add('pending'); io.observe(b); } });
  }

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
