function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/messenger";

    const [authorInput, contentInput] = Array.from(document.querySelectorAll('#controls > div > input'));
   
    const textarea = document.getElementById('messages');

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitMessageHandler);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', submitLoadAllMessagesHandler)

    function submitMessageHandler() {

        const newMessage = {
            'author': authorInput.value,
            'content': contentInput.value
        }

        let httpHeader = {
            method: 'POST',
            body: JSON.stringify(newMessage)
        }
        
        fetch(`${BASE_URL}`, httpHeader);
      
        authorInput.value = '';
        contentInput.value = '';
    }

    async function submitLoadAllMessagesHandler() {
        console.log("im in")
        let messageContainer = [];

        fetch(`${BASE_URL}`)
            .then((res) => res.json())
            .then((messages) => {
                for (const key in messages) {
                    messageContainer.push(`${messages[key].author}: ${messages[key].content}`);
                    console.log(messages[key].author);
                    console.log(messages[key].content);
                }
                textarea.textContent += messageContainer.join('\n');
            })
            textarea.innerHTML = '';
        
    }
}

attachEvents();