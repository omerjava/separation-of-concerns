import { showMouseCoordinates } from './handler.js';


document
  .getElementById('user-interface')
  .addEventListener('mousemove', showMouseCoordinates);