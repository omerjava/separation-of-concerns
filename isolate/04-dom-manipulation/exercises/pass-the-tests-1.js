'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
const para1=divEl.children[0];
const section1=divEl.children[1];
const header1=divEl.children[2];

const navigation=document.createElement('nav');
divEl.appendChild(navigation);
const header2=document.createElement('h2');
const para2=document.createElement('p');


divEl.replaceChild(navigation,para1);
divEl.insertBefore(header2, section1);
divEl.removeChild(header1);
divEl.append(para2);
//  replace the <p>
//  insert something before the <section>
//  remove the <h1>
//  append something to the end

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
