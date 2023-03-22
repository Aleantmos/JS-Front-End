function extractText() {
    const liElements = Arrays.from(document.querySelectorAll("#items > li"));
    const textarea = document.getElementById("result");

    liElements
        .forEach((li) => {
            textarea.textContent += li.textContent + "\n";
        })
} 