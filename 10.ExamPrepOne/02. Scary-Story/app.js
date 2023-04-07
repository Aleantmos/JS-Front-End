window.addEventListener("load", solve);
function solve() {

    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        title: document.getElementById('story-title'),
        genre: document.getElementById('genre'),
        story: document.getElementById('story')
    }

    const currStoryStorage = {
        firstName: null,
        lastName: null,
        age: null,
        title: null,
        genre: null,
        story: null
    }

    const otherDOMSelectors = {
        publishBtn: document.getElementById('form-btn'),
        ul: document.getElementById('preview-list'),
        mainContainer: document.getElementById('main')
    };

    otherDOMSelectors.publishBtn.addEventListener('click', publishStoryHandler);

    function publishStoryHandler() {
        const li = createElement('li', '', otherDOMSelectors.ul, '', ['story-info']);
        const article = createElement('article', '', li);

        const { firstName, lastName, age, title, genre, story } = inputDOMSelectors;

        createElement('h4', `Name: ${firstName.value} ${lastName.value}`, article);
        createElement('p', `Age: ${age.value}`, article);
        createElement('p', `Title: ${title.value}`, article);
        createElement('p', `Genre: ${genre.value}`, article);
        createElement('p', `${story.value}`, article);

        for (const key in inputDOMSelectors) {
            currStoryStorage[key] = inputDOMSelectors[key].value;
        }

        const saveBtn = createElement('button', 'Save Story', li, '', ['save-btn']);
        saveBtn.addEventListener('click', saveStoryHandler);

        const deleteBtn = createElement('button', 'Delete Story', li, '', ['delete-btn']);
        deleteBtn.addEventListener('click', deleteStoryHandler);

        const editBtn = createElement('button', 'Edit Story', li, '', ['edit-btn']);
        editBtn.addEventListener('click', editStoryHandler);

        clearAllInputs();
    }

    function clearAllInputs() {
        Object.value(inputDOMSelectors)
            .forEach((input) => {
                input.value = '';
            })
    }

    function editStoryHandler() {
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = currStoryStorage[key];
        }

        otherDOMSelectors.publishBtn.removeAttribute('disabled');

        const elementsToDelete = Array.from(otherDOMSelectors.ul.childNodes);
        elementsToDelete.slice(2, elementsToDelete.length).forEach((element) => {
            element.remove();
        })
    }

    function deleteStoryHandler() {
        const elementsToDelete = Array.from(otherDOMSelectors.ul.childNodes);
        elementsToDelete
            .slice(2, elementsToDelete.length)
            .forEach((element) => {
                element.remove();
            });
        publishBtn.removeAttribure('disabled');
    }

    function saveStoryHandler() {
        otherDOMSelectors.mainContainer.innerHTML = '';
        createElement('h1', 'Your scary story is saved!', otherDOMSelectors.mainContainer);
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
                htmlElement[key] = attributes[key];
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}

