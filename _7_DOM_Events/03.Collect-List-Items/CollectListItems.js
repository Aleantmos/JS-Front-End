function extractText() {
    const items = Array.from(document.getElementById("items").children);

    const area = document.getElementById("result");

    for (const curr of items) {
        area.textContent += curr.textContent + "\n";
    }
}