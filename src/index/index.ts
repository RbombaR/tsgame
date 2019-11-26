import "../utils/utils.css";
import "./index.css";
import {buildElement} from '../utils/html';

async function main() {
  console.log('hello sd game!');

  const buttonNode = buildElement('div', {
        style: 'border: 1px solid red',
        class: 'block',
        textContent: 'Click me!',
        handlers: {
            onclick: () => buttonNode.textContent = 'Clicked!',
            onmouseover: () => buttonNode.style.width = '200px',
        },
    });


    const buttonNode2 = buildElement('div', {
        style: 'border: 1px solid red',
        class: 'block',
        textContent: 'Click me!',
        handlers: {
            onclick: () => buttonNode.textContent = 'Clicked!',
            onmouseover: () => buttonNode.style.width = '200px',
        },
    });
    

    buttonNode.appendChild(buttonNode2);

  document.body.appendChild(buttonNode);
  buttonNode.remove();
  document.body.appendChild(buttonNode);


  window.addEventListener('keypress', function (e) {
      if (e.key === 'a') {

      }
      switch (e.key) {
          case 'a':
              break;
          case 'b':
              break;
      }
  })

}



main();
