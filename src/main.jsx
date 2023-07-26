// == Imports
import { randomHexColor, generateSpanColor } from './utils/color';

import './styles/index.scss';

// == State
const state = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

console.log(state);

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = state;

  document.querySelector('.nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = state;

  document.querySelector('.gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = state;

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.querySelector('.colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Controls
document.getElementById('randAll').addEventListener('click', () => {
  // debug
  console.log('Random all colors');
  // data
  state.nbColors += 2;
  state.firstColor = randomHexColor();
  state.lastColor = randomHexColor();
  // ui
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById('randFirst').addEventListener('click', () => {
  // data
  state.nbColors += 1;
  state.firstColor = randomHexColor();
  // ui
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById('randLast').addEventListener('click', () => {
  // data
  state.nbColors += 1;
  state.lastColor = randomHexColor();
  // ui
  renderNbColors();
  renderGradient();
  renderColors();
});

document.getElementById('toLeft').addEventListener('click', () => {
  // data
  state.direction = '270deg';
  // ui
  renderGradient();
  renderColors();
});

document.getElementById('toRight').addEventListener('click', () => {
  // data
  state.direction = '90deg';
  // ui
  renderGradient();
  renderColors();
});
