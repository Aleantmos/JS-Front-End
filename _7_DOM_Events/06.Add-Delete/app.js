function addItem() {
  const items = document.getElementById("items");

  const addItem = document.getElementById("newItemText");

  const newLi = document.createElement("li");
  const newAnchor = document.createElement("a");

  newAnchor.textContent = "[Delete]";
  newAnchor.setAttribute("href", "#");
  newAnchor.addEventListener("click", deleteHandler);

  newLi.textContent = addItem.value;
  newLi.appendChild(newAnchor);
  items.appendChild(newLi);

  addItem.value = "";

  function deleteHandler(e) {
    const liItem = e.currentTarget.parentElement;

    liItem.remove();
  }
}
