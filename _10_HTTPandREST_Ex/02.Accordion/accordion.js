async function solution() {
    const ARTICLE_TITLE_URL = "http://localhost:3030/jsonstore/advanced/articles/list/";
    const DETAILS_URL = "http://localhost:3030/jsonstore/advanced/articles/details/";

    const main = document.querySelector('#main');


    const createElement = (type, content, parentNode, clazz, attributes) => {
        const htmlElement = document.createElement(type);

        if (content && type === 'input') {
            htmlElement.value = content;
        } 

        if (content && type != 'input') {
            htmlElement.textContent = content; 
        }


        if (clazz) {
            htmlElement.classList.add(clazz);
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        return htmlElement;
    }

    const btnShowMoreHandler = () => {
        const btn = event.target;

        const extraInfo = btn.parentElement.parentElement.querySelector('.extra');

        if (btn.textContent === 'More') {
            extraInfo.style.display = 'inline-block';
            btn.textContent = 'Less';
        } else {
            extraInfo.style.display = 'none';
            btn.textContent = 'More';
        }
    }

    const createHtmlElement = async (data) => {
        const accordian = createElement('div', '', main, 'accordion');
        const head = createElement('div', '', accordian, 'head');
        const title = createElement('span', data.title, head);
        const btn = createElement('button', 'More', head, "", {id: data._id});

        btn.addEventListener('click', btnShowMoreHandler)

        const extra = createElement('div', '', accordian, 'extra');

        const content = await loadDetails(data._id);
        console.log(content)
        createElement('p', content.content, extra);

        return accordian;
    }

    const loadData = async () => {
        const data = await fetch(`${ARTICLE_TITLE_URL}`);
        return await data.json();
    }

    const loadDetails = async (id) => {
        console.log(id);
        const data = await fetch(`${DETAILS_URL}${id}`);
        return await data.json();
    }



    const loadDataToHtml = async (data) => {
        for (const key in data) {
            main.appendChild(await createHtmlElement(data[key]));
        }
    }

    await loadDataToHtml(await loadData())
}

solution();