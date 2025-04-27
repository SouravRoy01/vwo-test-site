const button = document.getElementById('testButton');
const message = document.getElementById('clickMessage');

button.addEventListener('click', () => {
  message.textContent = 'Button was clicked!';
});
