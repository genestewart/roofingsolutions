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
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      event.preventDefault(); // Prevent form submission
    }
  });
}

const apiEndpoint = 'https://your-ghost-instance.com/api/v1/';
const projectsUrl = `${apiEndpoint}projects`;

fetch(projectsUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Fetching Projects from Ghost API
fetch('https://your-ghost-instance.com/api/v1/projects')
  .then(response => response.json())
  .then(data => {
    const projects = data.projects;
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
      const listItem = document.createElement('LI');
      listItem.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <img src="${project.image}" alt="">
        <button class="view-btn">View Details</button>
      `;
      projectList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
