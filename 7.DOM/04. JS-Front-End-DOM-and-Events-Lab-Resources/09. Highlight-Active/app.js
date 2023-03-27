function focused() {
    let allInputs = Array.from(document.getElementsByTagName("input"));

    for (const input of allInputs) {
        input.addEventListener("focus");
        input.addEventListener("blur"); 
    }

    function handleFocus(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        
        parentDiv.classList.add("focused")
    }


    function handlerBlur(event) {
        const currentDiv = event.target;
        const parentDiv = currentInput.parentElement;

        if (parentDiv.classList.contains("focused")) {
            parentDiv.classList.remove("focused");
        }
    }
}