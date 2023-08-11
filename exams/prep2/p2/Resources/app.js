window.addEventListener("load", solve);

function solve() {

  let totalLikes = 0;

  const inputDOMSelectors = { 
    genre: document.querySelector('input[name="genre"]'),
    name: document.querySelector('input[name="name"]'),
    author: document.querySelector('input[name="author"]'),
    date: document.querySelector('input[name="date"]'),
  };

  const otherDOMSelectors = {
    addBtn: document.getElementById('add-btn'),
    allHitsContainer: document.querySelector(".all-hits-container"),
    savedContainer: document.querySelector('.saved-container'),
    totalLikesContainer: document.querySelector('.likes > p')
  };

  otherDOMSelectors.addBtn.addEventListener('click', addSongHandler);

  function likeSongHandler() {
    this.setAttribute('disabled', true);
    totalLikes++;
    otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`;
  }

  function deleteSongHandler() {
    this.parentNode.remove();
  }

  function saveSongHandler() {
    const songRef = this.parentNode;
    const saveBtn = songRef.querySelector('.save-btn')
    const likeBtn = songRef.querySelector('.like-btn')
    
    saveBtn.remove();
    likeBtn.remove();
    
    otherDOMSelectors.savedContainer.appendChild(songRef);
  }

  function addSongHandler(e) {
    e.preventDefault();
    let allInputsAreNonEmpty = Object.values(inputDOMSelectors)
        .every((input) => input.value != '');

    if (!allInputsAreNonEmpty) {
        return;
    }

    const { genre, name, author, date } = inputDOMSelectors; 
    const songContainer = createElement('div', '', otherDOMSelectors.allHitsContainer, "",['hits-info']);
    createElement('img', '', songContainer, '', '', { src: './static/img/img.png' });
    createElement('h2', `Genre: ${genre.value}`, songContainer);
    createElement('h2', `Name: ${name.value}`, songContainer);
    createElement('h2', `Age: ${author.value}`, songContainer);
    createElement('h2', `Date: ${date.value}`, songContainer)
    
    const saveBtn = createElement('button', 'Save song', songContainer, '', ['save-btn']);
    saveBtn.addEventListener('click', saveSongHandler);

    const likeBtn = createElement('button', 'Like song', songContainer, '', ['like-btn']);
    likeBtn.addEventListener('click', likeSongHandler);

    const deleteBtn = createElement('button', 'Delete', songContainer, '', ['delete-btn']);
    deleteBtn.addEventListener('click', deleteSongHandler);
  

    clearAllInputs();
}

function clearAllInputs() {
  Object.values(inputDOMSelectors)
    .values((input) => {
      input.value = '';
    })
}




  function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}
