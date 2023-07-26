async function solution() {
    const ARTICLE_TITLE_URL = "http://localhost:3030/jsonstore/advanced/articles/list";
    const DETAILS_URL = "http://localhost:3030/jsonstore/advanced/articles/details/";

    const main = document.querySelector('#main');


    const createElement = (type, content, parentNode, id, clazz, attributes) => {
        const htmlElement = document.createElement(type);

        if (content && type === 'input') {
            htmlElement.value = content;
        } 

        if (content && type != 'input') {
            htmlElement.textContent = content; 
        }

        if (id) {
            htmlElement.id = id;
        }

        if (clazz) {
            htmlElement.class = clazz;
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttributes(key, attributes[key]);
            }
        }

        return htmlElement;
    }

    const createHtmlElement = async (data) => {
        const accordian = createElement('div', '', main, '', 'accordian');
        const head = createElement('div', '', accordian, '', 'head');
        const title = createElement('span', data.title, head);
        const btn = createElement('button', 'More', head, data.id);

        const extra = createElement('div', '', accordian, '', 'extra');

        const content = await loadDetails(data._id);
        createElement('p', content, extra);
    }

    const loadData = async () => {
        const data = await fetch (ARTICLE_TITLE_URL);
        return await data.json();
    }

    const loadDetails = async (id) => {
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