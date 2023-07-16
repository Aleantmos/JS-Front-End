function addItem() {
  const items = document.getElementById("items");

  let itemToAdd = document.getElementById("newItemText").value;

  const newItem = document.createElement("li");
  
  newItem.textContent = itemToAdd;

  items.appendChild(newItem);

  document.getElementById("newItemText").value = "";
}
