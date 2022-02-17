 import { reverseAndUpper } from './logic.js';

export const reverseAndUpperHandler = (event) => {
    debugger;
    // read and process user input
    const input = event.target.value;
  
    // execute core logic
    const resultLogic = reverseAndUpper(input);
  
    // render result for user
    document.getElementById('output').innerHTML = resultLogic ;
  
    // log result for developers
    console.log('\n --- user action ---');
    console.log('input:', input);
    console.log('reversedUppercase:', reversedUppercase);
  };
