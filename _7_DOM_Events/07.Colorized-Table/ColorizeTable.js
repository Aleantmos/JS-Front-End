function colorize() {
  const table = document.querySelector("table").rows;

  for (let i = 0; i < table.length; i++) {
    if (i % 2 === 1) {
      table[i].style.background = "Teal";
    }
  }
}
