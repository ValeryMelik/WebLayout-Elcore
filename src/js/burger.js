document
  .querySelector('.headermiddle__burger')
  .addEventListener('click', function () {
    this.classList.toggle('headermiddle__burger_active');
    document
      .querySelector('.headermiddle__nav')
      .classList.toggle('headermiddle__nav_active');
    document.body.classList.toggle('stop-scroll');
  });
