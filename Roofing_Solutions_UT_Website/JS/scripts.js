// Sticky Navigation Bar
window.onscroll = function() {
  var header = document.querySelector('header');
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// Mobile Burger Menu
const burgerMenu = document.querySelector('.burger-menu');
const navTray = document.querySelector('.nav-tray');

burgerMenu.addEventListener('click', () => {
  navTray.classList.toggle('open');
});
