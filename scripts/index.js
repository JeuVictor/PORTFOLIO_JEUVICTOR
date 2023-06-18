window.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const mobileNavbar = document.querySelector('.navbar__mobile');
  const button = document.querySelector('.burger');

  if (button) {
    button.addEventListener('click', function () {
      mobileNavbar.classList.toggle('active');
    });
  } else {
    console.error("O elemento com a classe 'burger' não foi encontrado.");
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });
});
