function addItem() {
    const itemsContainer = document.getElementById('items');

    const getNewItem = document.getElementById('newItemText');

    const newDiv = document.createElement('div');
    const anchor = document.createElement('a');

    anchor.textContent = '[Delete]';
    anchor.setAttribute('href', '#');
    anchor.addEventListener('click', deleteHandler);

    newDiv.textContent = getNewItem.value;
    newDiv.appendChild(anchor);
    itemsContainer.append(newDiv);

    function deleteHandler(event) {
        const div = event.currentTarget.parentElement;
        div.remove();
    }

    getNewItem.value = "";


}