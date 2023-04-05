function attachEvents() {
    const BASE_URL = `http://localhost:3030/jsonstore/messenger`;

    const textarea = document.getElementById('messages');

    const [authorInput, contentInput] = document.querySelectorAll('#controls input');

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', messageHandler);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', getAllMessagesHandler)


    function messageHandler() {
        const newMessage = {
            author: authorInput.value,
            content: contentInput.value
        }
        const httpHeaders = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newMessage)
        }

        fetch(`${BASE_URL}`, httpHeaders);

        authorInput.value = '';
        contentInput.value = '';
    }

    function getAllMessagesHandler() {
        let output = [];

        fetch(`${BASE_URL}`)
            .then((res) => res.json())
            .then((messages) => {
                for (const key in messages) {
                    output.push(`${messages[key].author}: ${messages[key].content}`)
                }
                textarea.textContent += output.join('\n');
            })
        textarea.innerHTML = '';

    }
}

attachEvents();