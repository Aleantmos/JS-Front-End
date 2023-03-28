function attachEvents() {


    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/"
    const phonebookContainer = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");

    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const createBtn = document.getElementById("btnCreate");

    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createPhoneBookHandler);

    async function loadPhoneBookHandler() {
        try {
            const phonebookRes = await fetch(BASE_URL);
            let phonebookData = await phonebookRes.json();

            phonebookData = Object.values(phonebookData);
            phonebookContainer.innerHTML = "";

            for (const { phone, person, _id } of phonebookData) {
                const li = document.createElement("li");
                const button = document.createElement("button");

                button.textContent = "Delete";
                button.id = _id;
                button.addEventListener("click", deletePhonebookHandler)

                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(button);
                phonebookContainer.appendChild(li);
            }

        } catch (err) {
            console.log(err);
        }
    }



    function createPhoneBookHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;

        const httpHeader = {
            method: "POST",
            body: JSON.stringify({ person, phone })
        }

        fetch(BASE_URL, httpHeader)
            .then((res) => res.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = "";
                phoneInput.value = "";
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async function deletePhonebookHandler(e) {
        const id = this.id;

        const httpHeader = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeader)
            .then((res) => res.json())
            .then((loadPhoneBookHandler))
            .catch((err) => {
                console.log(err);
            })
    }
}

attachEvents();