function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnClick = document.querySelector('.change-color');
const switchColor = () => {
  const newCOlor = getRandomHexColor();
  document.body.style.backgroundColor = newCOlor;
  document.querySelector('.color').textContent = newCOlor;
};
btnClick.addEventListener('click', switchColor);
