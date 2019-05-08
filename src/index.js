(async () => {
  const response = await fetch('/api/message');
  const {message} = await response.json();
  const messageElement = document.querySelector('[data-message]');

  messageElement.textContent = message;
})();
