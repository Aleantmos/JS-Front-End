window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.querySelector("#form-btn");
  const previewUl = document.querySelector("#preview-list");

  const form = document.querySelector("form");
  const [iFirstName, iLastName, iAge, iTitle] = form.querySelectorAll("input");
  const iGenre = document.querySelector("#genre");

  const iStory = document.querySelector("#story");
  publishBtn.addEventListener("click", publishHandler);

  let savedData = {};

  function publishHandler() {
    savedData = {
      firstName: iFirstName.value,
      lastName: iLastName.value,
      age: iAge.value,
      title: iTitle.value,
      genre: iGenre.value,
      story: iStory.value,
    };

    if (checkConstraints(savedData)) {
      const li = createElement("li", "", previewUl, "", "story-info");
      const article = createElement("article", "", li);
      const name = createElement(
        "h4",
        `Name: ${iFirstName.value} ${iLastName.value}`,
        article
      );
      const age = createElement("p", `Age: ${iAge.value}`, article);
      const title = createElement("p", `Title: ${iTitle.value}`, article);
      const genre = createElement("p", `Genre: ${iGenre.value}`, article);
      const story = createElement("p", iStory.value, article);
      const saveBtn = createElement("button", "Save Story", li, "", "save-btn");
      saveBtn.addEventListener("click", saveHandler);

      const editBtn = createElement("button", "Edit Story", li, "", "edit-btn");
      editBtn.addEventListener("click", editHandler);

      const deleteBtn = createElement(
        "button",
        "Delete Story",
        li,
        "",
        "delete-btn"
      );
      deleteBtn.addEventListener("click", deleteHandler);
      form.reset();

      publishBtn.disabled = true;
    }
  }

  function checkConstraints(data) {
    for (const key in data) {
      if (data[key] === '') {
        return false;
      }
    }
    return true;
  }

  function deleteHandler() {
    const li = document.querySelector("#preview-list > li");
    li.remove();

    publishBtn.disabled = false;
  }

  function editHandler() {
    publishBtn.disabled = false;

    iFirstName.value = savedData.firstName;
    iLastName.value = savedData.lastName;
    iAge.value = savedData.age;
    iTitle.value = savedData.title;
    iGenre.value = savedData.genre;
    iStory.value = savedData.story;

    const li = document.querySelector("#preview-list > li");
    li.remove();
  }

  function saveHandler() {
    const mainDiv = document.querySelector("#main");

    mainDiv.innerHTML = "";

    const saved = createElement("h1", "Your scary story is saved!", mainDiv);
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
