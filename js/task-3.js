const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const outputFieldEl = () => {
  let username = inputEl.value.trim();
  if (username === '') {
    username = 'Anonymous';
  }
  outputEl.textContent = username;
};

inputEl.addEventListener('input', outputFieldEl);
