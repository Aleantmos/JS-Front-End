// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
  
    const listContainer = document.querySelector('#todo-list');

    const loadAllBtn = document.querySelector('#load-button');
    loadAllBtn.addEventListener('click', loadAllHandler);

    const addItemBtn = document.querySelector('#add-button');
    addItemBtn.addEventListener('click', addItemHandler);

    async function addItemHandler(e) {
        e.preventDefault()
        const title = document.querySelector('#title');

        if (title.value.trim().length > 3) {
        
            let itemObject = {
                name: title.value
            }
        
            const httpHeaders = {
                method: 'Post', 
                body: JSON.stringify(itemObject) 
            }
    
            await fetch(BASE_URL, httpHeaders)
                .then(() => loadAllHandler(e));
                

            title.value = "";
        }
    }
        
    

    async function loadAllHandler(e) {
        e.preventDefault();
        let response = await fetch(BASE_URL);

        let items = await response.json();

        listContainer.innerHTML = "";

        for (const key in items) {
            console.log(items[key]);

            const li = createElement('li', '', listContainer);
            const span = createElement('span', items[key].name, li, items[key].id)

            const removeBtn = createElement('button', 'Remove', li);
            const editBtn = createElement('button', 'Edit', li);
                
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
          htmlElement.classList.add(clazz);
        }
    
        if (attributes) {
          for (const key of attributes) {
            htmlElement.setAttribute(key, attributes[key]);
          }
        }
    
        return htmlElement;
    }
}

attachEvents();
