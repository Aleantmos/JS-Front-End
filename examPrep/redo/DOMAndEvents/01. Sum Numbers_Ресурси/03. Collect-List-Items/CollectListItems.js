function extractText() {
    
    const ul = document.getElementById('items');

    const liContainer = (ul.children);

    const textarea = document.getElementById('result');

    for (const li of liContainer) {
        textarea.textContent += li.textContent + '\n';
    }


}