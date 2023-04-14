function addItem() {
    const ulContainer = document.getElementById('items');

    const newInput = document.getElementById('newItemText');

    const newLi = document.createElement('li');
    newLi.textContent = newInput.value;

    ulContainer.append(newLi);

    newInput.value = "";
}