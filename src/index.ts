function component(): HTMLElement {
    let element: HTMLElement = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello';
  
    return element;
  }
  
  document.body.appendChild(component());