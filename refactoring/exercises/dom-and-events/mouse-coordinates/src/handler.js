import { formatCoordinates } from './logic.js';

export const showMouseCoordinates = (event) => {
    debugger;
    // read & process user input
    const xValue = event.pageX;
    const yValue = event.pageY;

    // execute core logic
    const resultLogic = formatCoordinates(xValue, yValue);

    // render result for user
    document.getElementById('mouse-position').innerHTML = resultLogic;

    // log action for developers
    console.log('\n--- new coordinates ---');
    console.log('x:', xValue);
    console.log('y:', yValue);
  };
