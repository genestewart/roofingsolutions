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

// JavaScript to handle form submission and validation (if necessary)

// Example function to validate the contact form (add to this file)
document.querySelector('form').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    event.preventDefault(); // Prevent form submission
  }
});
