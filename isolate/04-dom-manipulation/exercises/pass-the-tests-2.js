'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

// --- write some code ---
const child1 = ulEl.children[0];
child1.innerHTML = 'toad';
const child2 = ulEl.children[1];
const newChildLi = document.createElement('li');
newChildLi.innerHTML='frog';
ulEl.replaceChild(newChildLi, child2);
const child4 = ulEl.children[3];
ulEl.removeChild(child4);
// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));

console.assert(
  ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3',
);

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI', `Test: child ${i} .nodeName`);

  const actualInnerHTML = ulEl.children[i].innerHTML;
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(
    actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML`,
  );
}
