(() => {
  const oldAnchors = {
    '#dueno': 'duenos-fundadores.html',
    '#dueno-fundador': 'duenos-fundadores.html',
    '#familia': 'empresas-familiares.html',
    '#empresa-familiar': 'empresas-familiares.html',
    '#operacion': 'directivos-gerentes.html',
    '#empresas': 'para-quien.html',
    '#es-para-usted': 'para-quien.html',
    '#que-hacemos': 'como-trabajamos.html',
    '#metodologia': 'como-trabajamos.html'
  };

  const onHome = /(^\/$|\/index\.html$)/.test(window.location.pathname);
  const oldTarget = oldAnchors[window.location.hash];
  if (onHome && oldTarget) {
    window.location.replace(oldTarget);
    return;
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    const word = toggle.querySelector('.menu-word');
    const closeMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      if (word) word.textContent = 'Menú';
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      if (word) word.textContent = open ? 'Cerrar' : 'Menú';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });
  }

  const buttons = [...document.querySelectorAll('.filter-btn')];
  const articles = [...document.querySelectorAll('.article-list-item')];
  const empty = document.getElementById('emptyFilter');
  if (buttons.length && articles.length) {
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const filter = btn.dataset.filter;
      let visible = 0;
      articles.forEach(article => {
        const match = filter === 'todos' || article.dataset.category === filter;
        article.hidden = !match;
        if (match) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    }));
  }

  const figure = document.getElementById('systemFigure');
  if (figure) {
    const nodes = figure.querySelectorAll('.system-node');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const openFigure = () => {
      nodes.forEach(node => {
        node.style.transform = `translate(${node.dataset.x}px, ${node.dataset.y}px)`;
      });
      figure.classList.add('is-open');
    };
    if (reduced || !('IntersectionObserver' in window)) {
      openFigure();
    } else {
      let opened = false;
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !opened) {
          opened = true;
          window.setTimeout(openFigure, 500);
          observer.disconnect();
        }
      }, {threshold: .3});
      observer.observe(figure);
    }
  }
})();
