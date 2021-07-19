const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const root = document.querySelector('#root');
const speed = 500;

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval;

root.addEventListener('click', (e) => {
  const button = document.querySelector('button.disabled');
  if (
    e.target.dataset.action === 'start' &&
    !e.target.classList.contains('disabled')
  ) {
    e.target.classList.add('disabled');
    interval = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomInteger(0, colors.length)];
    }, speed);
    e.target.classList.add('disabled');
    button.classList.remove('disabled');
  } else if (
    e.target.dataset.action === 'stop' &&
    !e.target.classList.contains('disabled')
  ) {
    clearInterval(interval);
    e.target.classList.add('disabled');
    button.classList.remove('disabled');
  }
});
