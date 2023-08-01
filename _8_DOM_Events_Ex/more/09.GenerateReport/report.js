function generateReport() {
  const selecteColumns = Array.from(
    document.querySelectorAll("thead > tr > th > input")
  );
  const tableContent = Array.from(document.querySelectorAll("tbody > tr"));
  const output = document.querySelector("#output");

  let fieldsToDisplay = {};

  let resultOutput = [...Array(tableContent.length)].map(() => ({}));
  output.value = "";

  function addFields() {
    for (const key in fieldsToDisplay) {
      tableContent.forEach((y, index) => {
        let text = y.querySelectorAll("td")[fieldsToDisplay[key]].textContent;
        Object.assign(resultOutput[index], { [key]: text });
      });
    }
  }

  selecteColumns.forEach((x, index) => {
    let [columnName, selected] = [x.name, x.checked];

    if (selected) {
      fieldsToDisplay[columnName] = index;
    }
  });

  addFields();
  output.value = JSON.stringify(resultOutput);
}
