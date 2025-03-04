document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.backdrop').classList.toggle('active');
});
  