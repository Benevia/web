(() => {

  /* ---------------------------------------------------------------
     Anclas de la estructura anterior.
     Los enlaces compartidos en su momento apuntaban a secciones de la
     portada (index.html#dueno). El fragmento no viaja al servidor, así
     que la redirección tiene que resolverse aquí.
  --------------------------------------------------------------- */
  const anclasAnteriores = {
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

  const enPortada = /(^\/$|\/index\.html$)/.test(window.location.pathname);
  const destino = anclasAnteriores[window.location.hash];
  if (enPortada && destino) {
    window.location.replace(destino);
    return;
  }

  /* --- Menú en pantallas pequeñas --- */
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const abierto = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(abierto));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* --- Filtro de artículos por categoría --- */
  const botones = [...document.querySelectorAll('.filter-btn')];
  const articulos = [...document.querySelectorAll('.article-list-item')];
  const vacio = document.getElementById('emptyFilter');

  if (botones.length && articulos.length) {
    botones.forEach(btn => btn.addEventListener('click', () => {
      botones.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filtro = btn.dataset.filter;
      let visibles = 0;
      articulos.forEach(a => {
        const coincide = filtro === 'todos' || a.dataset.category === filtro;
        a.hidden = !coincide;
        if (coincide) visibles++;
      });
      if (vacio) vacio.hidden = visibles !== 0;
    }));
  }

})();
