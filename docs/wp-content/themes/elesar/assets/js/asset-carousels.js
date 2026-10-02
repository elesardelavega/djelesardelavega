(() => {
  const stages = new Map(Array.from(document.querySelectorAll('[data-carousel-stage]')).map((stage) => [stage.dataset.carouselStage, stage]));
  if (!stages.size) return;
  document.querySelectorAll('[data-carousel][data-direction]').forEach((button) => {
    button.addEventListener('click', () => {
      const stage = stages.get(button.dataset.carousel);
      if (!stage) return;
      const direction = Number(button.dataset.direction || 1);
      const amount = stage.clientWidth * direction;
      const max = stage.scrollWidth - stage.clientWidth - 2;
      if ((direction > 0 && stage.scrollLeft >= max) || (direction < 0 && stage.scrollLeft <= 2)) {
        stage.scrollTo({ left: direction > 0 ? 0 : stage.scrollWidth, behavior: 'smooth' });
      } else {
        stage.scrollBy({ left: amount, behavior: 'smooth' });
      }
    });
  });
})();
