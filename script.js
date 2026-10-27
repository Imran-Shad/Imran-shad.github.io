const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
const heroSlides = document.querySelectorAll('.hero-bg');
if (heroSlides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let current = 0;
  setInterval(() => {
    heroSlides[current].classList.remove('is-active');
    current = (current + 1) % heroSlides.length;
    heroSlides[current].classList.add('is-active');
  }, 6000);
}

const toTop = document.querySelector('.to-top');
if (toTop) {
  const updateToTop = () => toTop.classList.toggle('is-visible', window.scrollY > 600);
  window.addEventListener('scroll', updateToTop, { passive: true });
  updateToTop();
}

document.getElementById('year').textContent = new Date().getFullYear();

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video[autoplay]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); });
}

document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', () => {
  const text = btn.dataset.copy;
  const done = () => { btn.textContent = 'Copied'; setTimeout(() => { btn.textContent = 'Copy'; }, 1600); };
  const fallback = () => {
    const el = btn.previousElementSibling;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    btn.textContent = 'Selected';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
  };
  try {
    navigator.clipboard.writeText(text).then(done, fallback);
  } catch (e) {
    fallback();
  }
}));
