function attachEvents() {

    const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts";
    const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments";

    const loadPosts = document.getElementById('btnLoadPosts');
    const postsContainer = document.getElementById('posts');
    const viewComments = document.getElementById('btnViewPost')

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let postsObj = {};

    loadPosts.addEventListener('click', loadPostsHandler);
    viewComments.addEventListener('click', loadCommentsHandler)

    async function loadPostsHandler() {
        let res = await fetch(`${POSTS_URL}`);
        let post = await res.json();

        for (const key in post) {
            console.log(post[key].title);
            console.log(post[key].id);
            createElement('option', post[key].title, postsContainer, '', '',{ value: key });

            postsObj[key] = {};
            postsObj[key].title = post[key].title;
            postsObj[key].content = post[key].body;
        }
    }

    async function loadCommentsHandler() {
        const optionsArr = Array.from(document.getElementsByTagName('option'));

        let selectedPostId = optionsArr.find((option) => option.selected === true).value;
        console.log(selectedPostId);

        let res = await fetch(`${COMMENTS_URL}`);    
        let comments = await res.json();


        postTitle.textContent = postsObj[selectedPostId].title;
        postBody.textContent = postsObj[selectedPostId].content;
        //postComments.innerHTML = '';

        for (const key in comments) {
            if (comments[key].postId === selectedPostId) {
                createElement('li', comments[key].text, postComments);
            }
           
        }

    }


    

    function createElement(type, content, parentNode, id, clazz, attributes) {
        const htmlElement = document.createElement(type);

        if (content && type != 'input') {
            htmlElement.textContent = content;
        }
        
        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        if (clazz) {
            htmlElement.class = clazz;
        }

        if (parentNode) {
            parentNode.append(htmlElement);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        return htmlElement;
    }
}

attachEvents();