
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    }));
  }
  const buttons = [...document.querySelectorAll('.filter-btn')];
  const articles = [...document.querySelectorAll('.article-list-item')];
  const empty = document.getElementById('emptyFilter');
  if (buttons.length && articles.length) {
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active')); btn.classList.add('active');
      const f = btn.dataset.filter; let shown = 0;
      articles.forEach(a => { const ok = f === 'todos' || a.dataset.category === f; a.hidden = !ok; if(ok) shown++; });
      if (empty) empty.hidden = shown !== 0;
    }));
  }
})();
