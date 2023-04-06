function attachEvents() {
    const TASKS_URL = 'http://localhost:3030/jsonstore/tasks/';

    const task = document.getElementById('title');

    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', addTaskHandler);

    const loadBtn = document.getElementById('load-button');
    loadBtn.addEventListener('click', loadAllTasksHandler);



    const ul = document.getElementById('todo-list');


    function loadAllTasksHandler(event) {

        if (event) {
            event.preventDefault();
        }
        ul.innerHTML = '';

        fetch(TASKS_URL)
            .then((res) => res.json())
            .then((tasksRes) => {
                const tasks = Object.values(tasksRes);
                for (const { _id, taskName } of tasks) {

                    const li = createElement('li', '', ul, _id);
                    createElement('span', taskName, li);
                    const removeBtn = createElement('button', 'Remove', li);
                    const editBtn = createElement('button', 'Edit', li);

                    removeBtn.addEventListener('click', removeBtnHandler);
                    editBtn.addEventListener('click', editBtnHandler);
                }


            })

    }
    function editBtnHandler(event) {
        const liParent = event.currentTarget.parentNode;
        const [ span, _removeBtn, editBtn] = Array.from(liParent.children);

        const editInput = createElement('input', span.textContent);
        liParent.prepend(editInput)


        const submitBtn = createElement('button', 'Submit', liParent);
        submitBtn.addEventListener('click', submitTaskHandler);

        span.remove();
        editBtn.remove();

    }

    function submitTaskHandler(event) {
        const liParent = event.currentTarget.parentNode;
        const id = event.currentTarget.parentNode.id;
        const [ input ] = Array.from(liParent.children);

        const httpHeader = {
            method: "PATCH",
            body: JSON.stringify({ taskName: input.value })
        }

        fetch(`${TASKS_URL}${id}`, httpHeader)
            .then(() => loadAllTasksHandler())
            .catch((err) => {
                console.log(err);
            })
    }

    function removeBtnHandler(event) {
        const id = event.currentTarget.parentNode.id;
        console.log(id);
        const httpHeader = {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(id)
        }

        fetch(`${TASKS_URL}${id}`, httpHeader)
            .then(() => loadAllTasksHandler())
            .catch((err) => {
                console.error(err);
            })
    }


    function addTaskHandler(event) {
        if (event) {
            event.preventDefault();
        }
        const taskName = task.value;

        const httpHeader = {
            method: 'POST',
            body: JSON.stringify({ taskName })
        }

        fetch(`${TASKS_URL}`, httpHeader)
            .then(() => {
                loadAllTasksHandler();
                task.value = '';
            })
            .catch((err) => {
                console.log(err);
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

        if (classes) {
            htmlElement.classList.add(classes);
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

attachEvents();