document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.backdrop').classList.toggle('active');
  if (this.classList.contains('active')) {
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
  } else {
    document.querySelector('body').removeAttribute('style');
  }
});
  