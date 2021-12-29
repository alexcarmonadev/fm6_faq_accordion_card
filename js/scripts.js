const elements = document.querySelectorAll('.main-arrow, .main-question');

elements.forEach((element) => {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('active');
  });
});
