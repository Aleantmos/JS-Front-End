function solve() {
  let textarea = document.getElementById("input");

  let formatBtn = document.getElementById("formatItBtn");

  let output = document.getElementById("output");

  formatBtn.addEventListener("click", formatHandler);

  function formatHandler() {
    let splitted = textarea.value.split(".").filter((e) => e !== "");

    while (splitted.length > 0) {

        let sentanceGroup = splitted.splice(0, 3)
            .map((p) => p.trimStart());
        
        const newParagraph = document.createElement('p');

        newParagraph.textContent += sentanceGroup.join('.') + '.';
        
        output.appendChild(newParagraph);
    }
  }
}
