function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';


    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewCommentsBtn = document.getElementById('btnViewPost')

    const selectedElement = document.getElementById('posts');

    const postTitleContainer = document.getElementById('post-title');
    const postContentContainer = document.getElementById('post-body');
    const commentsContainer = document.getElementById('post-comments');

    let postsObj = {};

    loadPostsBtn.addEventListener('click', loadPostOptionsHandler);
    viewCommentsBtn.addEventListener('click', viewPostHandler);

    function loadPostOptionsHandler() {
        fetch(`${POSTS_URL}`)
            .then((res) => res.json())
            .then((post) => {
                selectedElement.innerHTML = '';
                for (const key in post) {
                    postsObj[key] = {};
                    postsObj[key].title = post[key].title;
                    postsObj[key].content = post[key].body;

                    const currentOption = document.createElement('option');

                    currentOption.value = key;
                    currentOption.textContent = post[key].title;
                    selectedElement.appendChild(currentOption);
                }
                const arrayWithOptions = Array.from(document.getElementsByTagName('option'));
                
            })
    }

    function viewPostHandler() {
        const optionsArr = Array.from(document.getElementsByTagName('option'));
        let selectedPostId = optionsArr.find((option) => option.selected === true).value;

        fetch(`${COMMENTS_URL}`)
            .then((res) => res.json())
            .then((comments) => {
                postTitleContainer.textContent = postsObj[selectedPostId].title;
                postContentContainer.textContent = postsObj[selectedPostId].content;
                commentsContainer.innerHTML = '';

                for (const key in comments) {
                    if (comments[key].postId === selectedPostId) {
                        createElement('li', comments[key].text, commentsContainer);
                    }
                }
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