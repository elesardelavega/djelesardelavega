(() => {
  const cards = Array.from(document.querySelectorAll('.gallery-card'));
  const lightbox = document.querySelector('.elesar-lightbox');
  if (!cards.length || !lightbox) return;

  const media = lightbox.querySelector('.lightbox-media');
  const title = lightbox.querySelector('#elesar-lightbox-title');
  const meta = lightbox.querySelector('.lightbox-meta');
  const caption = lightbox.querySelector('figcaption p');
  const close = lightbox.querySelector('.lightbox-close');
  const prev = lightbox.querySelector('.lightbox-prev');
  const next = lightbox.querySelector('.lightbox-next');
  let index = 0;
  let lastFocus = null;

  const render = () => {
    const card = cards[index];
    const type = card.dataset.lightboxType;
    const src = card.dataset.lightboxSrc;
    media.replaceChildren();
    const node = type === 'video' ? document.createElement('video') : document.createElement('img');
    node.src = src;
    if (type === 'video') {
      node.controls = true;
      node.playsInline = true;
      node.autoplay = true;
    } else {
      node.alt = card.dataset.lightboxCaption || card.dataset.lightboxTitle || 'Imagen de Elesar De La Vega';
    }
    media.append(node);
    title.textContent = card.dataset.lightboxTitle || '';
    meta.textContent = card.dataset.lightboxMeta || '';
    caption.textContent = card.dataset.lightboxCaption || '';
  };

  const open = (nextIndex) => {
    lastFocus = document.activeElement;
    index = nextIndex;
    render();
    lightbox.hidden = false;
    document.documentElement.classList.add('has-lightbox-open');
    close.focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    media.replaceChildren();
    document.documentElement.classList.remove('has-lightbox-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  };

  const move = (delta) => {
    index = (index + delta + cards.length) % cards.length;
    render();
  };

  cards.forEach((card, cardIndex) => card.addEventListener('click', (event) => { event.preventDefault(); open(cardIndex); }));
  close.addEventListener('click', closeLightbox);
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });
})();

