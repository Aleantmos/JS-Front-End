window.addEventListener("load", solve);

function solve() {

  const publishBtn = document.querySelector('#form-btn');
  const previewUl = document.querySelector('#preview-list');

  const form = document.querySelector('form');
  const [ iFirstName, iLastName, iAge, iTitle ] = form.querySelectorAll('input');
  const iGenre = document.querySelector('#genre');

  const iStory = document.querySelector("#story");
  publishBtn.addEventListener('click', publishHandler);


  function publishHandler() {
    const li = createElement('li', '', previewUl, '', 'story-info');
    const article = createElement('article','', li);

    const name = createElement('h4', `Name: ${iFirstName.value} ${iLastName.value}`, article);
    const age = createElement('p', `Age: ${iAge.value}`, article);
    const title = createElement('p', `Title: ${iTitle.value}`, article);
    const genre = createElement('p', `Genre: ${iGenre.value}`, article);
    const story = createElement('p', iStory.value, article);

  }
  
  
}


function createElement(type, content, parentNode, id, clazz, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type === "input") {
    htmlElement.value = content;
  }

  if (content && type !== "input") {
    htmlElement.textContent = content;
  }

  if (parentNode) {
    parentNode.appendChild(htmlElement);
  }

  if (id) {
    htmlElement.id = id;
  }

  if (clazz) {
    htmlElement.clazz = clazz;
  }

  if (attributes) {
    for (const key of attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }

  return htmlElement;
}