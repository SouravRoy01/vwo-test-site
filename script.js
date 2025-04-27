const button = document.getElementById('testButton');
const message = document.getElementById('clickMessage');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

button.addEventListener('click', () => {
  message.textContent = 'Button was clicked!';
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = 'Thank you for contacting us!';
  contactForm.reset();
});
