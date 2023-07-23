function attachEvents() {
  const phonebookContainer = document.getElementById("phonebook");
  const loadBtn = document.getElementById("btnLoad");
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const createBtn = document.getElementById("btnCreate");

  loadBtn.addEventListener("click", loadPhoneBookHandler);

  createBtn.addEventListener("click", createPhonebookHandler);

  function createPhonebookHandler() {
    const person = personInput.value;
    const phone = phoneInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ person, phone }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadPhoneBookHandler();
        personInput.value = "";
        phoneInput.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

        button.addEventListener("click", deletePhonebookHandler);

        li.innerHTML = `${phone}: ${person}`;
        li.appendChild(button);
        phonebookContainer.appendChild(li);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function deletePhonebookHandler() {
    const id = this.id;
    const httpHeaders = {
      method: "Delete",
    };
    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then(loadPhoneBookHandler)
      .catch((err) => {
        console.log(err);
      });
  }
}

attachEvents();
