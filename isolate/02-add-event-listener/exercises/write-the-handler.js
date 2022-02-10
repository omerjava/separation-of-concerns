'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
  const confirmation = confirm('are you honest?');
 
  let result = "";
  if(confirmation) result="oke, we trust you!"
  else result="it would be better being honest!"
  
  alert(`himmm, ${result}`);
  // ask a user to confirm if they are honest
  // let them know what you think of their answer
};

buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
